import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchUserLearningLanguage } from '../../features/user/userData';
import { fetchBooks } from '../../api/gutenbergApi';
import { BookType } from '../../types/bookTypes';
import { BookList } from './styles';

const Books = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [expandedBooks, setExpandedBooks] = useState<{ [id: string]: boolean }>({});

  const observer = useRef<IntersectionObserver | null>(null);
  const lastBookElementRef = useRef<HTMLLIElement | null>(null);

  const loadInitialBooks = useCallback(async () => {
    try {
      const userLang = await fetchUserLearningLanguage();
      if (!userLang) {
        setLoading(false);
        return;
      }

      const data = await fetchBooks([userLang], undefined);
      setBooks(data.results);
      setNextUrl(data.next || null);
    } catch (e) {
      console.error('Error loading initial books:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreBooks = useCallback(async () => {
    if (loading || !nextUrl) return;

    setLoading(true);
    try {
      const userLang = await fetchUserLearningLanguage();
      const data = await fetchBooks([userLang], nextUrl);

      setBooks((prevBooks) => [...prevBooks, ...data.results]);
      setNextUrl(data.next);
    } catch (e) {
      console.error('Error loading more books:', e);
    } finally {
      setLoading(false);
    }
  }, [loading, nextUrl]);

  useEffect(() => {
    loadInitialBooks();
  }, [loadInitialBooks]);

  useEffect(() => {
    if (loading || !nextUrl) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          loadMoreBooks();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (lastBookElementRef.current) {
      observer.current.observe(lastBookElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, nextUrl, loadMoreBooks]);

  const toggleDescription = (id: string) => {
    setExpandedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const setLastBookRef = (element: HTMLLIElement | null, index: number) => {
    if (index === books.length - 1) {
      lastBookElementRef.current = element;

      if (observer.current && element) {
        observer.current.observe(element);
      }
    }
  };

  if (loading && books.length === 0) {
    return <p>Loading books...</p>;
  }

  return (
    <div className='container'>
      <h2>Books in Your Learning Language</h2>

      <BookList>
        {books.length > 0 ? (
          books.map((book, index) => {
            const description = book.summaries?.[0];
            const isExpanded = expandedBooks[book.id];

            return (
              <li key={book.id} ref={(element) => setLastBookRef(element, index)}>
                <img src={book.formats['image/jpeg']} alt={book.title} loading='lazy' />
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
          })
        ) : (
          <p>No books found.</p>
        )}
      </BookList>

      {loading && books.length > 0 && (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <p>Loading more books...</p>
        </div>
      )}
    </div>
  );
};

export default Books;
