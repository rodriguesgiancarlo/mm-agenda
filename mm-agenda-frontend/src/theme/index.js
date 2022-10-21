import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: mode('gray.100', 'gray.800')(props),
      },
    }),
  },

  colors: {
    primary: {
      ...ChakraTheme.colors['blue'],
    },
  },
});

export default customTheme;
