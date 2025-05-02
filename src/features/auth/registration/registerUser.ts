import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../../firebase/firebase';
import { UserData } from '../../../types/userType';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

const validateUserData = (userData: UserData): string | null => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(userData.email)) {
    return 'Invalid email format';
  }

  if (userData.password.length < 6) {
    return 'Password must be at least 6 characters long';
  }

  if (userData.password !== userData.confirmPassword) {
    return 'Passwords do not match';
  }

  return null;
};

export const registerUser = async (userData: UserData) => {
  const validationError = validateUserData(userData);
  if (validationError) {
    throw new Error(validationError);
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const user = userCredential.user;

    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      name: userData.name,
      email: userData.email,
      nativeLanguage: userData.nativeLanguage,
      learningLanguage: userData.learningLanguage,
      createdAt: Timestamp.fromDate(new Date()),
    });

    console.log(`User registered: ${JSON.stringify(user)}`);

    return { success: true, user };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error registering user:', error.message);
      return { success: false, error: error.message || 'Registration failed' };
    } else {
      console.error('Unknown error:', error);
      return { success: false, error: 'Unknown error occurred' };
    }
  }
};
