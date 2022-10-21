require('dotenv').config();

export default {
  IS_PROD: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod',
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT ?? 3000,

  WINSTON_LOG_LEVEL: process.env.WINSTON_LOG_LEVEL,

  DB_PATH: process.env.DB_PATH ?? null,
};
