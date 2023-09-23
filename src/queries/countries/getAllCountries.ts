import { Countries } from '../../models';

export const getAllCountriesQuery = async (query: string) =>
  Countries.find({
    $or: [{ 'name.official': query }, { 'name.common': query }, { cca2: query }, { cca3: query }, { ccn3: query }],
  }).exec();
