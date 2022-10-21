import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

const Alert = props => {
  const { status, title, hideIcon, children, ...rest } = props;

  return (
    <ChakraAlert status={status} {...rest}>
      {!hideIcon && <AlertIcon />}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </ChakraAlert>
  );
};

Alert.propTypes = {
  status: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  title: PropTypes.string,
  hideIcon: PropTypes.bool,
};

Alert.defaultProps = {
  status: 'info',
  title: '',
  hideIcon: false,
};

export default React.memo(Alert);
