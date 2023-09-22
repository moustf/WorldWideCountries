// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reshapeCountriesData = (data: any[]) => {
  const reshapedData = data.map(({ name: { common, official }, languages, cca2, cca3, ccn3, currencies, region }) => ({
    name: {
      common,
      official,
    },
    languages,
    cca2,
    cca3,
    ccn3,
    currencies,
    region,
  }));

  return reshapedData;
};
