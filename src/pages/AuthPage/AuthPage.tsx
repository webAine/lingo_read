import { useState } from 'react';
import { AuthMode, authModes, authText } from '../../types/authType';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { FormWrapper } from './styles';
import AnimationBg from '../../components/AnimationBg/AnimationBg';

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>(authModes.login);

  return (
    <>
      <AnimationBg />
      <FormWrapper>
        <h2>{authText[mode].title}</h2>
        {mode === authModes.login ? <LoginForm /> : <RegistrationForm />}

        <p>
          {authText[mode].question}{' '}
          <span onClick={() => setMode(mode === authModes.login ? authModes.register : authModes.login)}>{authText[mode].button}</span>
        </p>
      </FormWrapper>
    </>
  );
};

export default AuthPage;
