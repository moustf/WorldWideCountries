import mongoose from 'mongoose';

import { connection } from '../database/connection';
import { seed } from '../database/seed';

mongoose.set('strictQuery', true);

beforeAll(async () => {
  await connection().then(() => seed());
});

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await connection().then(() => seed());
});

afterAll(async () => {
  await mongoose.disconnect();
});

afterAll((done) => {
  return done();
});
