import { FetchedBooks } from '../types/FetchedBooksType';
import { getLanguageCodes } from '../utils/utils';

export const fetchBooks = async (userLanguages: string[], pageUrl?: string): Promise<FetchedBooks> => {
  try {
    const languageCodesForApi = getLanguageCodes(userLanguages);
    const url = pageUrl || `https://gutendex.com/books?languages=${languageCodesForApi.join(',')}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await response.json();

    return {
      results: data.results,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    return {
      results: [],
      next: null,
      previous: null,
    };
  }
};
