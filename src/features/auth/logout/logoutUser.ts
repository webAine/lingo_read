import { NavigateFunction } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export const logoutUser = async (navigate: NavigateFunction) => {
  const auth = getAuth();

  try {
    await signOut(auth);
    navigate('/auth');
  } catch (error) {
    console.error('Error signing out: ', error);
  }
};
