import { Router } from 'express';

import { downloadCountriesFile, getAllCountries, getCountryCurrencies, getGroupedCountries } from '../controllers';
import { adminAuth } from '../middlewares';

export const countriesRouter = Router();

countriesRouter.get('/', getGroupedCountries);
countriesRouter.get('/all', getAllCountries);
countriesRouter.get('/currencies', getCountryCurrencies);
countriesRouter.get('/data', adminAuth, downloadCountriesFile);
