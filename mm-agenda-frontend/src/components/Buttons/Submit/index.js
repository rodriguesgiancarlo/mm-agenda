import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const ButtonSubmit = props => {
  const { confirmMessage, label, ...rest } = props;

  const handleOnClick = e => {
    if (!window.confirm(confirmMessage)) {
      e.preventDefault();
    }
  };

  return (
    <Button
      type="submit"
      variant="solid"
      colorScheme="primary"
      onClick={handleOnClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

ButtonSubmit.propTypes = {
  confirmMessage: PropTypes.string,
  label: PropTypes.string,
};

ButtonSubmit.defaultProps = {
  confirmMessage: 'Confirma o envio das informações?',
  label: 'Gravar',
};

export default ButtonSubmit;
