import { Request, Response, NextFunction } from 'express';

import { getGroupedCountriesQuery } from '../../queries';

export const getGroupedCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const countries = await getGroupedCountriesQuery();

    if (!countries.length) {
      return res.status(204).json({});
    }

    return res.json({ msg: 'The grouped countries data got returned successfully!', data: countries });
  } catch (error) {
    return next(error);
  }
};
