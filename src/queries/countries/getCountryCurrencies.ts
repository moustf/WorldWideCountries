import { Countries } from '../../models';

export const getCountryCurrenciesQuery = async (query: string) =>
  Countries.find(
    {
      $text: {
        $search: query,
      },
    },
    {
      currencies: 1,
    },
  ).exec();
