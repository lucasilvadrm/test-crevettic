import { createTheme } from '@mui/material';

export default {
  colors: {
    header: '#E98F0A',
    border: '#EAEAEE',
    background: {
      paper: '#FFFFFF',
      default: '#E5E5E5',
    },
  },
  borderRadius: {
    component: '20px',
    button: '5px',
  },
  fontSize: {
    default: '12px',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E98F0A',
    },
    secondary: {
      main: '#0076C6',
      contrastText: '#ffffff',
    },
    grey: {
      500: '#999999',
      700: '#545454',
    },
  },
  typography: {
    fontSize: 12,
    h1: 20,
  },
});
