export type SelectLanguageProps = {
  choose: string;
  languages: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};