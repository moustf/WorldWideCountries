import { Countries } from '../../models';

export const getAllCountriesQuery = async (query: string) =>
  Countries.find({
    $text: {
      $search: query,
    },
  }).exec();
