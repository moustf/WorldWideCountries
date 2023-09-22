export interface CountriesAttributes {
  name: Record<string, string>;
  languages: Record<string, string>;
  cca2: string;
  cca3: string;
  ccn3: string;
  currencies: Record<string, Record<string, string>>;
  region: string;
}
