import { Routes, Route } from 'react-router';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<RegisterPage />} />
        </Routes>
    </>
  );
};

export default App;
