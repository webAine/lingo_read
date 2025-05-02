import { BookType } from './bookTypes';

export type FetchedBooks = {
  results: BookType[];
  next: string | null;
  previous: string | null;
};
