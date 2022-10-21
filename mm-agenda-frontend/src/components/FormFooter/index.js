import { Stack } from '@chakra-ui/react';
import React from 'react';

const FormFooter = props => {
  const { children, ...rest } = props;

  return (
    <Stack
      direction={['column', null, 'row']}
      justify="right"
      spacing={4}
      pt={4}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default FormFooter;
