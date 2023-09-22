import axios from 'axios';

export const fetchCountries = async (uri: string) => {
  const res = await axios.get(uri);

  return res.data;
};
