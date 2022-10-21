import environment from '@/config/environment';
import { createLogger, format as _format, transports as _transports } from 'winston';
// import fileTransport from './transports/dailyRotateFile';

const logger = createLogger({
  defaultMeta: { service: 'API_MM_AGENDA', env: environment.NODE_ENV, pid: process.pid },
  format: _format.combine(
    _format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    _format.errors({ stack: true }),
    _format.splat(),
    _format.json(),
  ),
  transports: [
    // fileTransport,
    new _transports.Console({
      format: _format.simple(),
      level: 'verbose',
    }),
  ],
  handleExceptions: true,
  handleRejections: true,
});

module.exports = logger;
