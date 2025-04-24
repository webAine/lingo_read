export const authModes = {
  login: 'login',
  register: 'register',
} as const;

export type AuthMode = typeof authModes[keyof typeof authModes];

export const authText = {
  [authModes.login]: {
    title: 'Login',
    question: 'Don’t have an account yet?',
    button: 'Register',
  },
  [authModes.register]: {
    title: 'Registration',
    question: 'Do you already have an account?',
    button: 'Login',
  },
};
