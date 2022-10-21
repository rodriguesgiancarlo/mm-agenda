import React from 'react';
import { Text } from '@chakra-ui/react';
import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <Text pt={4}>
        Bem-vinda(o) ao <b>MM Agenda</b>! Para começar, selecione uma opção no
        Menu
      </Text>
    </Container>
  );
};

export default React.memo(Home);
