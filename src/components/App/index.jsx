import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProvider } from '@mui/material';
import themeSC from '../../assets/styles/themes/default';
import { theme } from '../../assets/styles/themes/customMui';
import GlobalStyles from '../../assets/styles/global';
import Layout from '../../layout';

function App() {
  return (
    <ThemeProviderSC theme={themeSC}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </ThemeProviderSC>
  );
}

export default App;
