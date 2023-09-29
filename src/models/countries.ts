import mongoose from 'mongoose';

import { CountriesAttributes } from '../utils';

const currencySchema = new mongoose.Schema(
  {
    name: String,
    symbol: { type: String, required: false },
  },
  { _id: false },
);

const nameSchema = new mongoose.Schema(
  {
    official: String,
    common: String,
  },
  { _id: false },
);

const countriesSchema = new mongoose.Schema<CountriesAttributes>(
  {
    name: {
      type: nameSchema,
      required: [true, 'Please provide the name object!'],
    },
    language: {
      type: String,
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
      type: Map, // ? Allows for dynamic key and values of a type.
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

countriesSchema.index(
  { 'name.official': 'text', 'name.common': 'text', cca2: 'text', cca3: 'text', ccn3: 'text' },
  { name: 'search_text_index', default_language: 'en', language_override: 'en' },
);

export const Countries = mongoose.model('Countries', countriesSchema);
