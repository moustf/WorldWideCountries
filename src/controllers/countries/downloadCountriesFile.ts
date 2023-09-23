import { join } from 'path';

import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../utils';

export const downloadCountriesFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pathToCountriesFile = join(__dirname, '..', '..', 'data', 'countries.json');

    return res.download(pathToCountriesFile, 'countries.json', (error) => {
      if (error) {
        throw new CustomError(500, 'Error while downloading the file!');
      }
    });
  } catch (error) {
    return next(error);
  }
};
