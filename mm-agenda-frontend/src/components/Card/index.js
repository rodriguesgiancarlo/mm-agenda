import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Card = props => (
  <Box
    bg={useColorModeValue('white', 'whiteAlpha.200')}
    borderBottom="solid 1px"
    borderColor={useColorModeValue('gray.200', 'gray.600')}
    p={8}
    rounded={{
      sm: 'md',
    }}
    {...props}
  />
);

export default Card;
