import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { configs } from './configs';
import { notFoundController, serverErrorController } from './controllers';
import { router } from './routes';

const { port } = configs;

export const app = express();

app.use([
  compression(),
  morgan('dev'),
  cookieParser(),
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
]);
app.disable('x-powered-by');

app.set('port', port || 8080);

app.use('/api/v1/', router);

app.use([notFoundController, serverErrorController]);
