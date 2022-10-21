import environment from '@/config/environment';
const DailyRotateFile = require('winston-daily-rotate-file');

const dailyRotateFile = new DailyRotateFile({
  filename: '%DATE%.log',
  dirname: 'logs',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '2m',
  maxFiles: '30d',

  // Winston options
  handleExceptions: true,
  handleRejections: true,
  level: environment.WINSTON_LOG_LEVEL,
});

export default dailyRotateFile;
