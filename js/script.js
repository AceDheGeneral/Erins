class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  // Define a class for the library
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Add a book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Remove a book from the library
    removeBook(book) {
      const index = this.books.indexOf(book);
      if (index > -1) {
        this.books.splice(index, 1);
      }
    }
  
    // Get all the books in the library
    getAllBooks() {
      return this.books;
    }
  
    // Search for books by title or author
    searchBooks(keyword) {
      return this.books.filter(
        book =>
          book.title.toLowerCase().includes(keyword.toLowerCase()) ||
          book.author.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }
  
  // Create a library instance
  const library = new Library();
  
  // Add some books to the library
  library.addBook(new Book("Book 1", "Author 1", 2021));
  library.addBook(new Book("Book 2", "Author 2", 2022));
  library.addBook(new Book("Book 3", "Author 3", 2023));
  
  // Test the library functions
  console.log(library.getAllBooks());
  
  const keyword = "book 2";
  console.log(library.searchBooks(keyword));
  
  const bookToRemove = library.getAllBooks()[0];
  library.removeBook(bookToRemove);
  console.log(library.getAllBooks());
  
