export const fetchBooks = async () => {
  try {
    const res = await fetch('https://gutendex.com/books/');

    if (!res.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
};
