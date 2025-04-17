type InputFieldProps = {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;
