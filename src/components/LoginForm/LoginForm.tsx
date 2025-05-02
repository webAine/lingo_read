import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth/login/loginUser';
import InputField from '../InputField/InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await loginUser(email, password);

      setLoading(false);

      if (result.user) {
        console.log('User logged in successfully');
        navigate('/');
      } else {
        setError(result.error || null);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmitLoginForm}>
      <InputField type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      {error && <p className='error-message'>{error}</p>}
    </form>
  );
};

export default LoginForm;
