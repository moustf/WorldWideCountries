import mongoose from 'mongoose';
import yargs from 'yargs';

import { Countries } from '../models';
import { parseBinaryUri, fetchCountries, reshapeCountriesData, updateCountriesFile } from '../utils';
import { configs } from '../configs';
import { connection } from './connection';

export const seed = async () => {
  try {
    await connection();

    const apiUri = parseBinaryUri();

    const countries = await fetchCountries(apiUri);

    const reshapedCountries = reshapeCountriesData(countries);

    await updateCountriesFile(reshapedCountries);

    // ? Empty the database before seeding.
    await Countries.deleteMany({});

    // ? Seed the database with the reshaped countries array.
    await Countries.create(reshapedCountries);

    await mongoose.disconnect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong while seeding the database, ', error);
  }
};

if (require.main === module) {
  yargs.command(
    'seed', // ? The command-line argument we need to recognize
    'Seeding the database', // ? Description of the command.
    {}, // ? Empty configuration object.
    async () => {
      await seed();
    }, // ? Call back function that will be called in the success case.
  ).argv;
}
