import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import themeSC from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import AppRoutes from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProviderSC theme={themeSC}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProviderSC>
    </BrowserRouter>
  );
}

export default App;
