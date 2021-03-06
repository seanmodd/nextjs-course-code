/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body:
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  heading:
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  lg: '62em',
});
const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 800,
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px',
};

// const overrides = {
//   ...chakraTheme,
//   fonts,
//   fontWeights,
//   fontSizes,
//   // breakpoints,
// // };
// const myTheme = {
//   components: {
//     Button: {
//       // 1. We can update the base styles
//       baseStyle: {
//         fontWeight: 'normal',

//         // Normally, it is "semibold"
//       },
//       // 2. We can add a new button size or extend existing
//       sizes: {
//         xl: {
//           h: '100px',
//           fontSize: 'lg',
//           px: '32px',
//         },
//       },
//       // 3. We can add a new visual variant
//       variants: {
//         'with-shadow': {
//           bg: 'blue.400',
//           boxShadow: '0 0 2px 2px #efdfde',
//         },
//         // 4. We can override existing variants
//         solid: (props) => ({
//           bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
//         }),
//       },
//     },
//   },
// };

const overrides = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'red.500',
        color: 'red.500',
      },
      // styles for the `a`
      a: {
        color: 'red.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
};

const customTheme = extendTheme({
  fonts,
  fontWeights,
  breakpoints,
  fontSizes,
  overrides,
});

export default customTheme;
