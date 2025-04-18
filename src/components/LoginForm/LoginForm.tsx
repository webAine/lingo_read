import { useState } from 'react';
import InputField from '../InputField/InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <InputField type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Enter</button>
    </form>
  );
};

export default LoginForm;
