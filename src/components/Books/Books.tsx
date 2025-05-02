import { useEffect, useState } from 'react';
import { fetchUserLearningLanguage } from '../../features/user/userData';
import { fetchBooks } from '../../api/gutenbergApi';
import { BookType } from '../../types/bookTypes';
import { BookList } from './styles';

const Books = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [expandedBooks, setExpandedBooks] = useState<{ [id: string]: boolean }>({});
  const [loading, setLoading] = useState<boolean>(true);

  const loadBooks = async (language: string, pageUrl?: string) => {
    setLoading(true);
    const data = await fetchBooks([language], pageUrl);
    setBooks(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      const userLang = await fetchUserLearningLanguage();
      if (userLang) {
        setLanguage(userLang);
        loadBooks(userLang);
      } else {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleNext = () => {
    if (language && nextPage) loadBooks(language, nextPage);
  };

  const handlePrev = () => {
    if (language && prevPage) loadBooks(language, prevPage);
  };

  const toggleDescription = (id: string) => {
    setExpandedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p>Loading...</p>;

  console.log(books);

  return (
    <div className='container'>
      <h2>Books in Your Learning Language</h2>
      <BookList>
        {books.map((book) => {
          const description = book.summaries?.[0];
          const isExpanded = expandedBooks[book.id];

          return (
            <li key={book.id}>
              <img src={book.formats['image/jpeg']} alt='' />
              <div className='book_info'>
                <div className='book_description'>
                  <p className='book_author'>{book.authors.map((author) => author.name).join(', ')}</p>
                  <h3 className='book_title'>{book.title}</h3>
                  <p className='book_descr'>
                    {description ? (isExpanded ? description : description.split(' ').slice(0, 30).join(' ') + '...') : 'Description not available'}
                  </p>
                  {description && <button onClick={() => toggleDescription(book.id)}>{isExpanded ? 'Read less' : 'Read more'}</button>}
                </div>
                <div className='book_nav'>
                  <button>add</button>
                  <button>favourites</button>
                </div>
              </div>
            </li>
          );
        })}
      </BookList>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePrev} disabled={!prevPage}>
          ← Previous
        </button>
        <button onClick={handleNext} disabled={!nextPage} style={{ marginLeft: '1rem' }}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default Books;
