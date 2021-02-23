import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import axios from '../utils/api.mjs';
const all = Promise.all.bind(Promise);

const resolvers = {
	Query: {
		async getCoins(root, _, ctx) {
			if (ctx?.coins) {
				console.log('from context');
				return ctx.coins;
			}

			const coins = await axios.get('https://rest.coinapi.io/v1/assets');
			const { data = [] } = coins;
			return data
				.filter(q => q.type_is_crypto)
				.map(({ asset_id, name, price_usd }) => {
					return { asset_id, name, price_usd };
				});
		},
		async getUserByUserName(root, { username }, ctx) {
			const user = await ctx.User.findOne({ username }).populate({ path: 'entries', model: 'Entry' }).exec();

			return user;
		},
		async getCurrentUser(root, args, { currentUser, User, Entry }) {
			if (!currentUser) {
				return null;
			}

			const user = await User.findOne({ username: currentUser.username }).populate({
				path: 'entries',
				model: 'Entry',
			});

			return user;
		},
	},

	Entry: {
		async profit(entry, _, ctx) {
			const { coins, resolvers } = ctx;
			let { valueAtBuying, slug, amount, date } = entry;
			if (!valueAtBuying) {
				const dateTime = date.toJSON();
				const result = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${slug}/USD?time=${dateTime}`);
				valueAtBuying = result?.data?.rate;
				entry.valueAtBuying = valueAtBuying;
				entry = await resolvers.Mutation.editEntry(null, entry, ctx);
			}
			const coin = coins.find(c => c.asset_id === slug);

			if (coin?.price_usd) {
				entry.profit = (coin.price_usd - valueAtBuying) * amount;
				return entry.profit;
			}

			return null;
		},
	},
	User: {
		total({ entries }) {
			return entries.reduce((acc, curr) => {
				acc += curr.profit || 0;
				return acc;
			}, 0);
		},
	},
	Mutation: {
		async addEntry(root, { date, coin, slug, amount }, { currentUser, Entry, User }) {
			console.log('addEntry - ', date, coin, slug, amount);

			const timeDate = new Date(date).toJSON();
			const string = `https://rest.coinapi.io/v1/exchangerate/${slug}/USD?time=${timeDate}`;
			const result = await axios.get(string);
			let valueAtBuying = result?.data?.rate;

			const newEntry = await new Entry({
				date,
				coin,
				slug,
				amount,
				valueAtBuying,
			}).save();
			const { _id } = newEntry;
			const user = await User.findOneAndUpdate(
				{ username: currentUser.username },
				{ $addToSet: { entries: _id } },
			);

			return newEntry;
		},
		async editEntry(root, { id, date, coin, slug, amount }, { currentUser, Entry, User }) {
			console.log('editEntry - ', date, coin, slug, amount);

			const timeDate = new Date(date).toJSON();
			const string = `https://rest.coinapi.io/v1/exchangerate/${slug}/USD?time=${timeDate}`;
			const result = await axios.get(string);
			let valueAtBuying = result?.data?.rate;
			const nextEntry = await Entry.findOneAndUpdate(
				{ _id: id },
				{
					date,
					coin,
					slug,
					amount,
					valueAtBuying,
				},
			).exec();
			return nextEntry;
		},

		async deleteEntry(root, { id }, { currentUser, Entry, User }) {
			const [nextEntry] = await all([
				Entry.findOneAndRemove({ _id: id }),
				User.findOneAndUpdate({ username: currentUser.username }, { $pull: { entries: id } }),
			]);

			return nextEntry;
		},
		async signupUser(root, { username, password, email }, { User }) {
			// find user with username
			const user = await User.findOne({ username });
			if (user) {
				throw new Error('Username was used');
			}
			// create hash password
			const salt = bcrypt.genSaltSync(10);
			const hash_password = bcrypt.hashSync(password, salt);
			// save new user to database
			const newUser = new User({
				username,
				password: hash_password,
				email,
			});
			await newUser.save();
			// create token with user data
			const token = jwt.sign({ username, email }, process.env.SECRET, { expiresIn: '1d' });
			// return token to client
			return { token };
		},
		async signinUser(root, { username, password }, { User }) {
			// find user with username...
			const user = await User.findOne({ username });
			if (!user) {
				throw new Error('User not found');
			}
			// check password and hash password is same
			const isMatch = bcrypt.compareSync(password, user.password);
			if (!isMatch) {
				throw new Error('Password invalid');
			}
			// create token with user data
			const token = jwt.sign(
				{
					username,
					email: user.email,
				},
				process.env.SECRET,
				{ expiresIn: '1d' },
			);
			// return token to client
			return { token };
		},
	},
};
export default resolvers;
