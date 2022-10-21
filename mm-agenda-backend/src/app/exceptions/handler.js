import logger from '@/app/logger';

const getErrorMessageObject = message => ({
  error: message,
});

const handle = (err, res) => {
  if (err.name === 'ValidationException') {
    return res.status(400).json(getErrorMessageObject(err.message));
  }
  if (err.name === 'ModelNotFoundException') {
    return res.status(404).json(getErrorMessageObject(err.message));
  }

  logger.error(err);

  return res.status(500).json(getErrorMessageObject(err.message));
};

export default handle;
