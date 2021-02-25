import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import jwt from 'jsonwebtoken';
import { Coin, Entry, User, healthCheck } from './db/index.mjs';
import schema from './graphql/schema.mjs';
import resolvers from './graphql/resolvers.mjs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// noinspection ES6AwaitOutsideAsyncFunction
let coins = await resolvers.Query.getCoins();

setInterval(async () => {
	coins = await resolvers.Query.getCoins();
}, 15 * 60000);

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	introspection: true,
	playground: true,
	cacheControl: { defaultMaxAge: 30 },
	context: async ({ req }) => {
		const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
		if (token) {
			const currentUser = await jwt.verify(token, process.env.SECRET);
			return {
				currentUser,
				User,
				Entry,
				Coin,
				coins,
				...(typeof window === 'undefined' && { resolvers }),
			};
		} else {
			return {
				User,
				Entry,
				Coin,
				coins,
				...(typeof window === 'undefined' && { resolvers }),
			};
		}
	},
});

server.applyMiddleware({ app });
// static content //
app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

const listener = app.listen(8080, () => {
	console.log(`🚀 Server ready at ${listener.address().port}${server.graphqlPath}`);
});
