import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../../utils';

export const serverErrorController = (error: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log(error, 'Server Error Controller!');
  const { status, msg } = error;

  return res.status(status).json({ msg });
};
