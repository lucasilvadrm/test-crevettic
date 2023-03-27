import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0076C6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#545454',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 12,
    h1: 20,
    fontFamily: 'inherit',
  },
});
