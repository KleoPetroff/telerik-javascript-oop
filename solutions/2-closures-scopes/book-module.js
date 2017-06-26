class BookLibrary {
  constructor() {
    this.books = [];
    this.categories = [];
    this.bookID = 0;
    this.categoryID = 0;
  }

  validateBook(options) {
    if (options.author === '') {
      throw new Error('Title cannot be empty.');
    }

    if (options.title.length < 2 || options.title.length > 100) {
      throw new Error('Title of the book must be between 2 and 100 characters.');
    }

    const ISBNLength = options.ISBN.toString().length;
    if (ISBNLength !== 10 && ISBNLength !== 13) {
      throw new Error('ISBN must be 10 or 13 digits.');
    }

    for (const book of this.books) {
      if (book.title.toLowerCase() === options.title.toLowerCase()) throw new Error('Book already exists.');
      if (book.ISBN === options.ISBN) throw new Error('Book with the same ISBN already exists.');
    }
  }

  addBook(options) {
    this.validateBook(options);

    const book = {
      title: options.title,
      author: options.title,
      ISBN: options.ISBN,
      category: options.category,
      ID: this.bookID
    };

    this.books.push(book);
    this.bookID++;

    if (!this.checkCategory(options.category)) {
      this.addCategory(options.category);
    }
  }

  checkCategory(category) {
    let result = false;
    for (const cat of this.categories) {
      if (cat.category.toLowerCase() === category.toLowerCase()) result = true;
      break;
    }

    return result;
  }

  addCategory(category) {
    this.categories.push({category, ID: this.categoryID});
    this.categoryID++;
  }

  listBooks(sorting = 'ID') {
    return this.books.sort((a, b) => a[sorting] - b[sorting]);
  }

  listCategories() {
    return this.categories.sort((a, b) => a.ID - b.ID);
  }
}

export default BookLibrary;
