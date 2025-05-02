import { useNavigate, NavigateFunction } from 'react-router-dom';
import { logoutUser } from '../../features/auth/logout/logoutUser';

const LogoutButton = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleLogout = () => {
    logoutUser(navigate);
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
