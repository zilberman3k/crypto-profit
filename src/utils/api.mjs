import axios from 'axios';
import dotEnv from 'dotenv';
dotEnv.config();

function* getNextHeader() {
	const arr = process.env['X-CoinAPI-Keys']?.split(',');
	if (!arr) {
		throw new Error('No env file');
	}
	while (1) {
		for (const v of arr) {
			yield v;
		}
	}
}

const gen = getNextHeader();

const instance = axios.create();
instance.interceptors.request.use(request => {
	request.headers['X-CoinAPI-Key'] = gen.next().value;
	return request;
});

export default instance;
