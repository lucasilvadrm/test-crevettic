import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProvider } from '@mui/material';
import themeSC, { theme } from '../../assets/styles/themes/default';
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
