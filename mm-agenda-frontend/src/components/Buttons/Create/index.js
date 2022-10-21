import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';
import { Button } from '@chakra-ui/react';

const ButtonCreate = props => {
  const { label, ...rest } = props;

  return (
    <Button variant="solid" colorScheme="primary" {...rest}>
      {label}
    </Button>
  );
};

ButtonCreate.propTypes = {
  label: PropTypes.string,
  leftIcon: PropTypes.node,
};

ButtonCreate.defaultProps = {
  label: 'Adicionar',
  leftIcon: <FiPlus />,
};

export default ButtonCreate;
