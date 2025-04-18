import { useState } from 'react';
import { AuthMode, authModes, authText } from '../types/authTypes';
import LoginForm from '../components/LoginForm/LoginForm';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>(authModes.login);

  return (
    <div>
      {mode === authModes.login ? <LoginForm /> : <RegistrationForm />}

      <p>
        {authText[mode].question}{' '}
        <button onClick={() => setMode(mode === authModes.login ? authModes.register : authModes.login)}>{authText[mode].button}</button>
      </p>
    </div>
  );
};

export default AuthPage;
