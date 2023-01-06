import {
  createGlobalStyle,
  defaultTheme,
  generateHexAlphaVariants,
} from '@xstyled/emotion';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000000
  }
  
  a {
  color: inherit;
  text-decoration: none;
  
  }
  `;

export const theme = {
  ...defaultTheme,
  texts: {
    'button-04-sb': {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    'button-05-b': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
    },
    'button-05-sb': {},
    'button-04-r': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
    'button-05-r': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    'header-04-sb': {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
    },
    'header-05-sb': {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28px',
    },
    'header-06-sb': {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '24px',
    },
    'header-07-sb': {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '22px',
    },
    'header-08-r': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
    'header-08-sb': {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    'body-02-b': {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
    },
    'body-02-r': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    'body-03-r': {},
    'body-01-sb': {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    'body-01-r': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  fontWeights: {},
  fontSizes: {},
  lineHeights: {},
  letterSpacings: {},
  colors: {
    ...defaultTheme.colors,
    ...generateHexAlphaVariants({
      deep: '#0035BC',
      primary: '#4378FF',
      background: '#f8f9fa',
      secondary: '#FD461D',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#808080',
    }),
  },
  radii: {
    card: '10px',
  },
};
