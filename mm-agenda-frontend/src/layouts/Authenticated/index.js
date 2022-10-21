import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AuthenticatedLayout = props => {
  const { children } = props;

  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Navbar />
      <Box py={2} flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default AuthenticatedLayout;
