import mongoose from 'mongoose';
const { Schema } = mongoose;
const { String } = Schema.Types;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	favorites: {
		type: [Schema.Types.ObjectId],
		ref: 'Story',
	},
	entries: {
		type: [Schema.Types.ObjectId], // Schema.Types.ObjectId
		ref: 'Entry',
	},
});

export default mongoose.model('User', userSchema);
