import React from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';

const Container = props => {
  return <ChakraContainer maxW="container.lg" {...props} />;
};

export default React.memo(Container);
