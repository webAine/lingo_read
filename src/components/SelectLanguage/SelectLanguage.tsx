import { TiArrowSortedDown } from 'react-icons/ti';
import { SelectLanguageProps } from '../../types/selectAuthType.ts';
import { Select, IconWrapper, SelectWrapper } from './styles';

const SelectLanguage = ({ choose, languages, value, onChange }: SelectLanguageProps) => {
  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        <option>{choose}</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </Select>
      <IconWrapper>
        <TiArrowSortedDown size={20} />
      </IconWrapper>
    </SelectWrapper>
  );
};

export default SelectLanguage;
