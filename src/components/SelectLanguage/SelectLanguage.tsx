type SelectLanguageProps = {
  choose: string;
  languages: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectLanguage = ({ choose, languages, value, onChange }: SelectLanguageProps) => {
  return (
    <select value={value} onChange={onChange}>
      <option value=''>{choose}</option>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
