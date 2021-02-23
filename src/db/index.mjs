import conn, { initConnection, healthCheck } from './connection.mjs';

if (conn?.connection?.readyState === 1) {
	console.log('MongoDB connected');
} else {
	console.log('MongoDB status is ', conn?.connection?.readyState);
}

healthCheck();

export { default as Coin } from './models/Coin.mjs';
export { default as Entry } from './models/Entry.mjs';
export { default as User } from './models/User.mjs';
export { initConnection, healthCheck };
