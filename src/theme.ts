'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)'
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#1597F4'
    },
    secondary: {
      main: '#44FFD2'
    }
  }
});

export default theme;
