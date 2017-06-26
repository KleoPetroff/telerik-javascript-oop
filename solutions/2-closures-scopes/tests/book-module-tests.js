import chai from 'chai';
import BookLibrary from '../book-module';

import * as mock from './mock-data';

const expect = chai.expect;
const assert = chai.assert;

describe('Book Module', () => {
  let bookLibrary;

  beforeEach(() => {
    bookLibrary = new BookLibrary();
  });

  it('should exist', () => {
    expect(bookLibrary).to.exist;
  });

  it('should have an addBook method', () => {
    expect(bookLibrary.addBook).to.exist;
    expect(typeof bookLibrary.addBook).to.equal('function');
  });

  it('should add book to books array', () => {
    bookLibrary.addBook(mock.books[0]);
    expect(bookLibrary.books.length).to.equal(1);
  });

  it('should add multiple books', () => {
    bookLibrary.addBook(mock.books[0]);
    bookLibrary.addBook(mock.books[1]);

    expect(bookLibrary.books.length).to.equal(2);
  });

  it('should have a addCategory method', () => {
    expect(bookLibrary.addCategory).to.exist;
    expect(typeof bookLibrary.addCategory).to.equal('function');
  });

  it('should add category if one not present', () => {
    bookLibrary.addBook(mock.books[0]);
    expect(bookLibrary.categories.length).to.equal(1);
  });

  it('should not add the category if already present', () => {
    bookLibrary.addBook(mock.books[0]);
    bookLibrary.addBook(mock.books[2]);

    expect(bookLibrary.categories.length).to.equal(1);
  });

  it('should have a listBooks method', () => {
    expect(bookLibrary.listBooks).to.exist;
    expect(typeof bookLibrary.listBooks).to.equal('function');
  });

  it('should list all books', () => {
    bookLibrary.addBook(mock.books[0]);
    expect(bookLibrary.listBooks()).to.deep.equal(mock.singleSortedBook);
  });

  it('should list all books by ID by default', () => {
    bookLibrary.addBook(mock.books[0]);
    bookLibrary.addBook(mock.books[1]);

    expect(bookLibrary.listBooks()).to.deep.equal(mock.sortedBooksByID);
  });

  it('should have a listCategories method', () => {
    expect(bookLibrary.listCategories).to.exist;
    expect(typeof bookLibrary.listCategories).to.equal('function');
  });

  it('should list all categories', () => {
    bookLibrary.addBook(mock.books[0]);
    bookLibrary.addBook(mock.books[1]);

    expect(bookLibrary.listCategories()).to.deep.equal(mock.listedCategories);
  });

  it('should not have duplicates', () => {
    bookLibrary.addBook(mock.books[0]);
    bookLibrary.addBook(mock.books[2]);

    expect(bookLibrary.categories.length).to.equal(1);
  });

  it('should throw if the name of the author if empty string', () => {
    assert.throws(() => { bookLibrary.addBook(mock.wrongBooks.bookAuthor); }, Error, 'Title cannot be empty.');
  });

  it('should throw if the title of the book is with less than 2 characters', () => {
    assert.throws(() => { bookLibrary.addBook(mock.wrongBooks.bookTitle); }, Error, 'Title of the book must be between 2 and 100 characters.');
  });

  it('should throw if the title of the book is with more than 100 characters', () => {
    assert.throws(() => { bookLibrary.addBook(mock.wrongBooks.bookTitle101Chars); }, Error, 'Title of the book must be between 2 and 100 characters.');
  });

  it('should throw if the ISBN is more than 10 digits', () => {
    assert.throws(() => { bookLibrary.addBook(mock.wrongBooks.bookISBN); }, Error, 'ISBN must be 10 or 13 digits.');
  });

  it('should throw if the book title exists', () => {
    bookLibrary.addBook(mock.books[0]);
    assert.throws(() => { bookLibrary.addBook(mock.books[0]); }, Error, 'Book already exists.');
  });

  it('should throw if the ISBN exists', () => {
    bookLibrary.addBook(mock.books[0]);
    assert.throws(() => { bookLibrary.addBook(mock.wrongBooks.existingISBN); }, Error, 'Book with the same ISBN already exists.');
  });
});
