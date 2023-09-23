import { Request, Response, NextFunction } from 'express';

import { CustomError, searchQuerySchema } from '../../utils';
import { getAllCountriesQuery } from '../../queries';

export const getAllCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req.query;

    if (!query) {
      throw new CustomError(400, 'The query string was not provided!');
    }

    await searchQuerySchema.validate({ query });

    const countries = await getAllCountriesQuery(query as string);

    if (!countries.length) {
      return res.status(204).json({});
    }

    return res.json({ msg: 'The countries data got returned successfully!', data: countries });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.message));
    }

    return next(error);
  }
};
