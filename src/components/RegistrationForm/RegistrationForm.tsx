import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/registration/registerUser';
import InputField from '../InputField/InputField';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [learningLanguage, setLearningLanguage] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmitRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const userData = {
      name,
      email,
      nativeLanguage,
      learningLanguage,
      password,
      confirmPassword,
    };

    try {
      const result = await registerUser(userData);

      if (result.success) {
        console.log('User registered successfully');
        navigate('/');
      } else {
        setError(result.error || null);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitRegisterForm}>
      <InputField type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <InputField type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <SelectLanguage
        choose='choose native language'
        languages={languages}
        value={nativeLanguage}
        onChange={(e) => setNativeLanguage(e.target.value)}
      />
      <SelectLanguage
        choose='choose learning language'
        languages={languages}
        value={learningLanguage}
        onChange={(e) => setLearningLanguage(e.target.value)}
      />
      <InputField type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputField type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Registration'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default RegistrationForm;
