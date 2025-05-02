import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase';

export const deleteUserFn = async () => {
  const user = auth.currentUser;

  if (user && user.email) {
    const password = prompt('Введите пароль для подтверждения');

    if (!password) {
      console.log('Операция отменена пользователем');
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, password);

    try {
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
};
