import './config/module-alias';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import environment from '@/config/environment';
import logger from '@/app/logger';

const app = express();
app.use(
  cors({
    origins: ['*'],
    allowHeaders: ['pragma', 'cache-control', 'authorization', 'Authorization'],
  }),
);

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./app/routes').default(app);

app.listen(environment.PORT, () =>
  logger.info(
    `🚀 API MM-Agenda sendo executado no ambiente ${environment.NODE_ENV}, porta: ${environment.PORT}, pid ${process.pid}`,
  ),
);
