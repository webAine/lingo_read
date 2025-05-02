import { languageCodes } from '../languageCodes';

export const getLanguageCodes = (languages: string[]): string[] => {
  return languages.map((language) => languageCodes[language] || language);
};
