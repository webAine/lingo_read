import { deleteUserFn } from '../features/auth/delete/deleteUser';

const DeleteUserButton = () => {
  const handleDelete = () => {
    deleteUserFn();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteUserButton;
