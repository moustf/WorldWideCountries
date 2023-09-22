import mongoose from 'mongoose';

import { configs } from '../configs';

const { prodDbUri, devDbUri, testDbUri, nodeEnv } = configs;

let connectionString: string = '';

switch (nodeEnv) {
  case 'production':
    connectionString = prodDbUri as string;
    break;
  case 'development':
    connectionString = devDbUri as string;
    break;
  case 'test':
    connectionString = testDbUri as string;
    break;
  default:
    throw new Error('No NODE_ENV variable or invalid value was provided!');
}

if (!connectionString) {
  throw new Error('No connection URI was added to the .env file!');
}

export const connection = () => mongoose.connect(connectionString);
