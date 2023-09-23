import supertest from 'supertest';

import { app } from '../app';

describe('Testing the route that allows admins to download the data file.', () => {
  it('Should return a downloadable file response.', async () => {
    const res = await supertest(app).get('/api/v1/countries/data').set({ 'X-ADMIN': 1 });

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.headers['content-disposition']).toMatch(/^attachment;/);
  });

  it('Should return 403 and resource forbidden message.', async () => {
    const res = await supertest(app).get('/api/v1/countries/data');

    expect(res.status).toBe(403);
    expect(res.body.msg).toBe('Resource forbidden!');
  });

  it('Should return 400 (Bad Request) status code.', async () => {
    const res = await supertest(app).get('/api/v1/countries/currencies');

    const {
      body: { msg },
    } = res;

    expect(res.status).toBe(400);
    expect(msg).toBe('The query string was not provided!');
  });
});
