import { InputFieldProps } from '../../types/inputAuthType';
import { InputWrapper } from './styles';

const InputField = ({ type, label, value, onChange }: InputFieldProps) => {
  return (
    <InputWrapper>
      <input type={type} value={value} onChange={onChange} />
      <label>{label}</label>
    </InputWrapper>
  );
};

export default InputField;
