import { Request, Response } from 'express';

export const notFoundController = (_req: Request, res: Response) =>
  res.status(404).json({ msg: 'The route you are asking for does not exist!' });
