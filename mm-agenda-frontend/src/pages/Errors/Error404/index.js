import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Container from '@/components/Container';

const Error404 = () => {
  return (
    <Container>
      <Heading>Erro 404</Heading>
      <Text>A página solicitada não existe</Text>
    </Container>
  );
};

export default React.memo(Error404);
