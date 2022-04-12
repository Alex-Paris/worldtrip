import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  space: {
    13: '3.25rem',
  },

  semanticTokens: {
    colors: {
      // error: 'red.500',
      // success: 'green.500',
      highlight: '#FFBA08',
      'highlight.50': 'rgba(255, 186, 8, 0.5)',

      'dark.text': '#47585B',
      'dark.info': '#999999',
      'dark.info.50': {
        default: 'rgba(153, 153, 153, 0.5)',
        // _hover: 'dark.text',
      },

      'light.text': '#F5F8FA',
      'light.info': '#DADADA',
      'light.info.50': 'rgba(153, 153, 153, 0.5)',

      // text: {
      //   default: '#F5F8FA',
      //   _dark: '#999999',
      // },
    },
  },

  styles: {
    global: {
      body: {
        bg: 'light.text',
        color: 'dark.text',
      },
    },
  },
});
