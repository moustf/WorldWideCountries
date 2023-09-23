import { Countries } from '../../models';

export const getGroupedCountriesQuery = async () =>
  Countries.aggregate([
    {
      $group: {
        _id: {
          region: '$region',
          language: '$language',
        },
        countries: {
          $push: '$$ROOT',
        },
      },
    },
    {
      $project: {
        _id: 0,
        region: '$_id.region',
        language: '$_id.language',
        countries: 1,
      },
    },
  ]);
