import { Router } from 'express';

import { countriesRouter } from './countries';

export const router = Router();

router.use('/countries', countriesRouter);
