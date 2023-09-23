import { Countries } from '../models';
import { parseBinaryUri, fetchCountries, reshapeCountriesData, updateCountriesFile } from '../utils';
import { configs } from '../configs';
import { connection } from './connection';

const { nodeEnv } = configs;

export const seed = async () => {
  try {
    await connection();

    const apiUri = parseBinaryUri();

    const countries = await fetchCountries(apiUri);

    const reshapedCountries = reshapeCountriesData(countries);

    await updateCountriesFile(reshapedCountries);

    // ? Empty the database before seeding.
    await Countries.deleteMany({}, { maxTimeMS: 60000 });

    // ? Seed the database with the reshaped countries array.
    await Countries.create(reshapedCountries);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong while seeding the database, ', error);
  }
};

if (nodeEnv !== 'test') {
  seed();
}
