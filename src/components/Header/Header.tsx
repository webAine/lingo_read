import DeleteUserButton from '../../DeleteUserButton/DeleteUserButton';
import LogoutButton from './../LogoutButton/LogoutButton';

const Header = () => {
  return (
    <header>
      <LogoutButton />
      <DeleteUserButton />
    </header>
  );
};

export default Header;
