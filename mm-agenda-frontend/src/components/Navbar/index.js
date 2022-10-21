import React from 'react';
import Container from '@/components/Container';
import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.900')}
      borderBottom="solid 1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      w="full"
      py={2}
    >
      <Container>
        <Flex direction="row" align="center" w="full">
          <Link to="/">
            <Logo />
          </Link>
          <Spacer />
          <Menu />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
