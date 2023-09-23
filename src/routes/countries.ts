import { Router } from 'express';

import { getAllCountries, getCountryCurrencies, getGroupedCountries } from '../controllers';

export const countriesRouter = Router();

countriesRouter.get('/', getGroupedCountries);
countriesRouter.get('/all', getAllCountries);
countriesRouter.get('/currencies', getCountryCurrencies);
