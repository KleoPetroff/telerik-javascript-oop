export const books = [
  {title: 'Don Quixote', author: 'Miguel de Cervantes', ISBN: '8424116259', category: 'Novel' },
  {title: 'In Search of Lost Time', author: 'Marcel Proust', ISBN: '8424117283', category: 'Modernist' },
  {title: 'Ulysses', author: 'James Joyce', ISBN: '3213162592', category: 'Novel' },
];

export const wrongBooks = {
  bookTitle: {title: '', author: 'Miguel de Cervantes', ISBN: '8424116259', category: 'Novel' },
  bookTitle101Chars: {
    title: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901',
    author: 'Miguel de Cervantes',
    ISBN: '8424116259',
    category: 'Novel'
  },
  bookAuthor: {title: 'Don Quixote', author: '', ISBN: '8424116259', category: 'Novel' },
  bookISBN: {title: 'Don Quixote', author: 'Miguel de Cervantes', ISBN: '84241132162592', category: 'Novel' },
  existingISBN: {title: 'Ulysses', author: 'James Joyce', ISBN: '8424116259', category: 'Novel' },
};

export const singleSortedBook = [
  {ID: 0, ISBN: '8424116259', author: 'Don Quixote', category: 'Novel', title: 'Don Quixote'}
];

export const sortedBooksByID = [
  {
    ID: 0,
    ISBN: '8424116259',
    author: 'Don Quixote',
    category: 'Novel',
    title: 'Don Quixote'
  },
  {
    ID: 1,
    ISBN: '8424117283',
    author: 'In Search of Lost Time',
    category: 'Modernist',
    title: 'In Search of Lost Time'
  }
];

export const listedCategories = [
  {
    ID: 0,
    category: 'Novel'
  },
  {
    ID: 1,
    category: 'Modernist'
  }
];
