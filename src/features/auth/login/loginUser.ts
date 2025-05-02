import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase';
import { LoginResult } from '../../../types/userType';

export const loginUser = async (email: string, password: string): Promise<LoginResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return { user: userCredential.user, error: null };
  } catch (error: unknown) {
    let errorMessage = 'invalid email or password';

    if (typeof error === 'string') {
      errorMessage = error;
    }

    return { user: null, error: errorMessage };
  }
};
