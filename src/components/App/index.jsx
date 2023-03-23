import { ThemeProvider } from 'styled-components';
import theme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Layout from '../../layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
