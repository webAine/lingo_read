import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Загрузка...</div>;

  return user ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoute;
