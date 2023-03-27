import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProvider } from '@mui/material';
import themeSC from '../../assets/styles/themes/default';
import { theme } from '../../assets/styles/themes/customMui';
import GlobalStyles from '../../assets/styles/global';
import Layout from '../../layout';
import { ClientProvider } from '../../contexts/ClientContext';

function App() {
  return (
    <ClientProvider>
      <ThemeProviderSC theme={themeSC}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </ThemeProviderSC>
    </ClientProvider>
  );
}

export default App;
