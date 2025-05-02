export type AuthorType = {
  name: string;
  birth_year: number | null;
  death_year: number | null;
};

export type BookType = {
  id: string;
  title: string;
  authors: AuthorType[];
  languages: string[];
  formats: { [key: string]: string };
  summaries: string[];
};
