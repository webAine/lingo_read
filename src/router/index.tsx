import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthPage from '../pages/AuthPage';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />

      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
