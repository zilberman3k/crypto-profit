// connect MongoDB
import mongoose from 'mongoose';
import dotEnv from 'dotenv';

dotEnv.config();

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
let conn, healthInterval;

const initConnection = async () => {
	try {
		conn = await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		return conn;
	} catch (e) {
		console.error(`error at mongoose.connect db/index.js - ${e.message}`);
		//   throw new Error(`error at mongoose.connect db/index.mjs - ${e.message}`)
		return new Error(`error at mongoose.connect db/index.js - ${e.message}`);
	}
};

const healthCheck = time => {
	clearInterval(healthInterval);
	healthInterval = setInterval(async () => {
		if (conn?.connection?.readyState === 1) {
			console.log('mongo db ok');
			return conn;
		} else {
			console.error('MongoDB status is ', conn?.connection?.readyState);
			conn = await initConnection();
		}
	}, time || process.env.MONGOOSE_HEALTH_INTERVAL);
};

// noinspection ES6AwaitOutsideAsyncFunction
conn = await initConnection();
export default conn;

export { initConnection, healthCheck };
