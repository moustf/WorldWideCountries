import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../utils';

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const isAdmin = req.get('X-ADMIN') as string;

    if (Number.parseInt(isAdmin) !== 1) {
      throw new CustomError(403, 'Resource forbidden!');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
