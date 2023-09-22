import mongoose from 'mongoose';

import { CountriesAttributes } from '../utils';

const currencySchema = new mongoose.Schema({
  name: String,
  symbol: { type: String, required: false },
});

const countriesSchema = new mongoose.Schema<CountriesAttributes>(
  {
    name: {
      type: Map, // ? Allows for dynamic key and values of a type.
      of: String,
      required: [true, 'Please provide the name object!'],
    },
    languages: {
      type: Map,
      of: String,
      required: false,
    },
    cca2: {
      type: String,
      required: [true, 'Please provide the value of the CCA2 collection!'],
    },
    cca3: {
      type: String,
      required: false,
    },
    ccn3: {
      type: String,
      required: false,
    },
    currencies: {
      type: Map,
      of: currencySchema,
      required: false,
    },
    region: {
      type: String,
      required: [true, 'Please provide the value of the region collection!'],
    },
  },
  {
    timestamps: true,
  },
);

export const Countries = mongoose.model('Countries', countriesSchema);
