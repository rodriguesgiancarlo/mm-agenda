import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Stack
      direction={['column', null, 'row']}
      w="full"
      align="center"
      justify="center"
      py={2}
    >
      <Text>Candidato: Giancarlo Rodrigues</Text>
    </Stack>
  );
};

export default Footer;
