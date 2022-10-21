import React from 'react';
import {
  CircularProgress as ChakraCircularProgress,
  Flex,
  Text,
} from '@chakra-ui/react';

const CircularProgress = props => {
  return (
    <Flex align="center">
      <ChakraCircularProgress isIndeterminate size="30px" />
      <Text ml={2}>Carregando...</Text>
    </Flex>
  );
};

export default React.memo(CircularProgress);
