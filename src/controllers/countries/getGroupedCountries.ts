import { Request, Response, NextFunction } from 'express';

import { getGroupedCountriesQuery } from '../../queries';

export const getGroupedCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const countries = await getGroupedCountriesQuery();

    if (!countries.length) {
      return res.status(204).json({});
    }

    return res.json({ msg: 'The grouped countries data got returned successfully!', data: countries });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return next(error);
  }
};
