import supertest from 'supertest';

import { app } from '../app';

describe('Testing the route for getting all the currencies, searched by the CCA2.', () => {
  it('Should return all the country currencies for a given CCA2.', async () => {
    const res = await supertest(app).get('/api/v1/countries/currencies?query=MK');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].currencies.MKD.name).toBe('denar');
    expect(msg).toBe('The currencies data got returned successfully!');
  });

  it('Should return 204 (No Content) status code.', async () => {
    const res = await supertest(app).get('/api/v1/countries/currencies?query=English');

    expect(res.status).toBe(204);
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
