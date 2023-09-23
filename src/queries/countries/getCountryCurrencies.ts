import { Countries } from '../../models';

export const getCountryCurrenciesQuery = async (query: string) =>
  Countries.find(
    {
      cca2: query,
    },
    {
      currencies: 1,
    },
  ).exec();
