import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV, PRODUCTION_DB_URI, DEV_DB_URI, TEST_DB_URI } = process.env;

export const configs = {
  port: PORT,
  nodeEnv: NODE_ENV,
  prodDbUri: PRODUCTION_DB_URI,
  devDbUri: DEV_DB_URI,
  testDbUri: TEST_DB_URI,
};
