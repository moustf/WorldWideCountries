import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const asyncWriteFile = promisify(writeFile);

import { Countries } from '../types';
import { configs } from '../../configs';

export const updateCountriesFile = async (countries: Countries) => {
  const countriesFilePath =
    configs.nodeEnv === 'production'
      ? join(__dirname, 'data', 'countries.json')
      : join(__dirname, '..', '..', 'data', 'countries.json');

  await asyncWriteFile(countriesFilePath, JSON.stringify(countries));
};
