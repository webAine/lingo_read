import { User } from 'firebase/auth';

export type UserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nativeLanguage: string;
  learningLanguage: string;
};

export type LoginResult = { user: User; error: null } | { user: null; error: string };
