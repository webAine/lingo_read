type SelectLanguageProps = {
  languages: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectLanguage = ({ languages, value, onChange }: SelectLanguageProps) => {
  return (
    <select value={value} onChange={onChange}>
      <option value=''>Choose language</option>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
