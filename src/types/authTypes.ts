export const authModes = {
  login: 'login',
  register: 'register',
} as const;

export type AuthMode = typeof authModes[keyof typeof authModes];

export const authText = {
  [authModes.login]: {
    question: 'Don’t have an account yet?',
    button: 'Register',
  },
  [authModes.register]: {
    question: 'Do you already have an account?',
    button: 'Login',
  },
};
