import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const ButtonCancel = props => {
  const { confirmMessage, label, onClick, ...rest } = props;

  const handleOnClick = e => {
    e.preventDefault();

    if (window.confirm(confirmMessage)) {
      onClick(e);
    }
  };

  return (
    <Button variant="outline" onClick={handleOnClick} {...rest}>
      {label}
    </Button>
  );
};

ButtonCancel.propTypes = {
  confirmMessage: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonCancel.defaultProps = {
  confirmMessage: 'Tem certeza que deseja cancelar?',
  label: 'Cancelar',
  onClick: () => {},
};

export default ButtonCancel;
