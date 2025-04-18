import { Routes, Route } from 'react-router';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
