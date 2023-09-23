import { object, string } from 'yup';

export const searchQuerySchema = object({
  query: string().required('The query string is required!'),
});
