import { ThemeProvider } from 'styled-components';
import AppRouter from './router';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
