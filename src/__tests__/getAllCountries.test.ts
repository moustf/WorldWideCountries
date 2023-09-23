import supertest from 'supertest';

import { app } from '../app';

describe(`
  Testing the route for getting all the countries, searched by the CCA2, CCA3, CCN3, official name, and common name.
`, () => {
  it('Should return all the countries for a given CCA2.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=IO');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].cca2).toBe('IO');
    expect(msg).toBe('The countries data got returned successfully!');
  });

  it('Should return all the countries for a given CCA3.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=IOT');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].cca3).toBe('IOT');
    expect(msg).toBe('The countries data got returned successfully!');
  });

  it('Should return all the countries for a given CCN3.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=086');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].ccn3).toBe('086');
    expect(msg).toBe('The countries data got returned successfully!');
  });

  it('Should return all the countries for a given official name.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=British Indian Ocean Territory');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].name.official).toBe('British Indian Ocean Territory');
    expect(msg).toBe('The countries data got returned successfully!');
  });

  it('Should return all the countries for a given common name.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=British Indian Ocean Territory');

    const {
      body: { msg, data },
    } = res;

    expect(res.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].name.common).toBe('British Indian Ocean Territory');
    expect(msg).toBe('The countries data got returned successfully!');
  });

  it('Should return 204 (No Content) status code.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all?query=English');

    expect(res.status).toBe(204);
  });

  it('Should return 400 (Bad Request) status code.', async () => {
    const res = await supertest(app).get('/api/v1/countries/all');

    const {
      body: { msg },
    } = res;

    expect(res.status).toBe(400);
    expect(msg).toBe('The query string was not provided!');
  });
});
