import supertest from 'supertest';
import mongoose from 'mongoose';

import { app } from '../app';

describe('Testing the route for getting all the countries grouped by their language and region.', () => {
  it('Should return all the countries groped by their language and region.', async () => {
    const res = await supertest(app).get('/api/v1/countries');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].countries[0].name).toBeDefined();
    expect(msg).toBe('The grouped countries data got returned successfully!');
  });

  it('Should return 204 (No Content) status code.', async () => {
    await mongoose.connection.dropDatabase();
    const res = await supertest(app).get('/api/v1/countries');

    expect(res.status).toBe(204);
  });
});
