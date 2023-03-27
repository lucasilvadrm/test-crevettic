import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProvider } from '@mui/material';
import themeSC from '../../assets/styles/themes/default';
import { theme } from '../../assets/styles/themes/customMui';
import GlobalStyles from '../../assets/styles/global';
import Layout from '../../layout';
import { ClientProvider } from '../../contexts/ClientContext';
import { ModalProvider } from '../../contexts/ModalContext';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <ModalProvider>
      <ClientProvider>
        <ThemeProviderSC theme={themeSC}>
          <GlobalStyles />
          <ToastContainer />
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </ThemeProviderSC>
      </ClientProvider>
    </ModalProvider>
  );
}

export default App;
