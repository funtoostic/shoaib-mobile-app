import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  body: 'Volte-Semibold, sans-serif',
  heading: 'Volte-Semibold, serif',
  mono: 'Volte-Semibold, monospace',
};

const colors = {
  dark: {
    500: '#1E1E1E',
    600: '#161616',
    700: '#000000',
  },
  brand: {
    lightRed: '#FD926F',
    red: '#87230F',
    darkRed: '#5D0102',
    mandy: '#e04862',
    yellow: '#FDFF00',
    purple: '#8634D6',
    lightPurple: '#E2CFFF',
    mantis: '#82c752',
    amber: '#ffbf00',
  },
};

const breakpoints = createBreakpoints({
  sm: '20em', // 320px
  md: '30em', // 480px
  lg: '48em', // 768px
  xl: '64em', // 1024px
  '2xl': '75em', // 1200px
});

const theme = extendTheme({
  colors: colors,
  // todo set the focus outline color
  shadows: {
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6);',
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      // todo set the default font color and line height
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        textDecoration: 'none',
      },
      ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
        boxShadow: 'none !important',
      },
    },
  },
  // icons: {
  //
  // },
});

export default theme;
