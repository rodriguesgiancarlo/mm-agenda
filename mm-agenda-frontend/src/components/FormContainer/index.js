import { Stack } from '@chakra-ui/react';
import React from 'react';

const FormContainer = props => {
  const { children, ...rest } = props;

  return (
    <Stack as="form" direction="column" spacing={4} {...rest}>
      {children}
    </Stack>
  );
};

export default FormContainer;
