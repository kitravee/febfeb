/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createTheme, Theme } from '@mui/material/styles';

import {
  error,
  grey,
  primary,
  secondary,
  success,
  warning,
} from './theme-colors';

const fontSize = 14;

const fontFamily = [
  'Prompt',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
].join(',');

const fontFamily2 = [
  'IBM-Plex-Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
].join(',');

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Create a theme instance.
const historyLogTemplate = createTheme({
  palette: {
    primary: {
      ...primary,
      light: primary[100],
    },
    secondary,
    error,
    warning,
    success,
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400],
    },
    divider: grey[200],
    grey: { ...grey },
    background: {
      default: grey[100],
    },
  },
  typography: {
    fontSize,
    fontFamily,
    htmlFontSize: 16,
    h1: {
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
      fontFamily,
      fontWeight: 800,
    },
    h2: {
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
      fontFamily,
      fontWeight: 800,
    },
    h3: {
      fontFamily,
      fontSize: '2.25rem',
      fontWeight: 400,
      letterSpacing: 0.2,
    },
    h4: {
      fontFamily: fontFamily2,
      fontSize: '1.75rem',
      fontWeight: 400,
      letterSpacing: 0.2,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: fontFamily2,
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: 0.1,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: fontFamily2,
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: fontFamily2,
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: fontFamily2,
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: fontFamily2,
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.75,
      textTransform: 'initial',
    },
    caption: {
      display: 'inline-block',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#nprogress': {
          position: 'relative',
          zIndex: 1231,
        },
        '#nprogress .bar': {
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px !important',
          borderRadius: '0px 300px 300px 0px !important',

          background: `${primary[400]} !important`,
          overflow: 'hidden',
        },
        '#nprogress .peg': {
          boxShadow: `0 0 10px ${primary[500]}, 0 0 5px ${primary[500]} !important`,
        },
      },
    },
  },
});

const theme = { ...customTheme, ...historyLogTemplate };

theme.shadows[1] = '0px 1px 3px rgba(3, 0, 71, 0.09)';
theme.shadows[2] = '0px 4px 16px rgba(43, 52, 69, 0.1)';
theme.shadows[3] = '0px 8px 45px rgba(3, 0, 71, 0.09)';
theme.shadows[4] = '0px 0px 28px rgba(3, 0, 71, 0.01)';

export type MuiThemeProps = Theme;

export default theme;
