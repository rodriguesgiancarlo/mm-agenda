import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

const IconButtonDelete = props => {
  const { onClick, confirmMessage, ...rest } = props;

  const handleOnClick = () => {
    if (window.confirm(confirmMessage)) {
      onClick();
    }
  };

  return (
    <IconButton
      variant="ghost"
      colorScheme="red"
      icon={<FiTrash2 />}
      onClick={handleOnClick}
      {...rest}
    />
  );
};

IconButtonDelete.propTypes = {
  confirmMessage: PropTypes.string,
  onClick: PropTypes.func,
};

IconButtonDelete.defaultProps = {
  confirmMessage: 'Confirma a remoção?',
  onClick: () => {},
};

export default React.memo(IconButtonDelete);
