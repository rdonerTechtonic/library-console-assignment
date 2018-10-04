function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === book.title) {
      return false;
    }
  }
  this.bookShelf.push(book);
  return true;
}

Library.prototype.removeBookByTitle = function(title) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === title) {
      this.bookShelf.splice(i, 1);
      return true;
    }
  }
  return false;
}

Library.prototype.removeBookByAuthor = function(author) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].author === author) {
      this.bookShelf.splice(i, 1);
      return true;
    }
  }
  return false;
}

Library.prototype.getRandomBook = function() {
  if (filteredArr.length === 0) {
    return null;
  }
  var randomIndex = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[randomIndex];
}

Library.prototype.getBookByTitle = function(title) {
  return filteredArr = this.bookShelf.filter(
    function(book) {
      return (book.title.indexOf(title) !== -1);
    });
}

Library.prototype.getBookByAuthor = function(author) {
  var filteredArr = this.bookShelf.filter(
    function(book) {
      return (book.author.indexOf(author) !== -1);
    });
}

Library.prototype.addBooks = function(books) {
  booksAdded = 0;
  for (var i = 0; i < books.length; i++) {
    // console.log(books[i]);
    this.addBook(books[i]);
    booksAdded++;
  }
  return booksAdded;
}

//find distinct authors
Library.prototype.getAuthors = function() {
  var uniqueAuthors = [];
  var count = 0;
  var found = false;

  for (var i = 0; i < this.bookShelf.length; i++) {
    for (var j = 0; j < uniqueAuthors.length; j++) {
      if (this.bookShelf[i].author == uniqueAuthors[j]) {
          found = true;
        }
      }
      count++;
      if (count == 1 && found == false) {
        uniqueAuthors.push(this.bookShelf[i].author);
      }
      count = 0;
      found = false;
    }
    return uniqueAuthors;
}

Library.prototype.getRandomAuthorName = function() {
  if (this.bookShelf.length === 0) {
    return null;
  }
  var randomIndex = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[randomIndex].author;
}

document.addEventListener("DOMContentLoaded", function(e) {
  //add global instance
  window.gLibrary = new Library;

  window.gLibrary.bookShelf[0] = new Book("harry potter", "jk", "1000", "10/10/10");
  window.gLibrary.bookShelf[1] = new Book("all the pretty horses", "jk", "2000", "1/1/18");
  window.gLibrary.bookShelf[2] = new Book("it", "a", 200, "jan 1");
  window.gLibrary.bookShelf[3] = new Book("the shining", "e", 200, "dec 1");
  window.gLibrary.bookShelf[4] = new Book("book", "f", 200, "dec 1");
  window.gLibrary.bookShelf[5] = new Book("book2", "d", 200, "dec 1");

  book1 = new Book("harry potter", "jk rowling", "1000", "10/10/10");
  book2 = new Book("all the pretty horses", "cormac mccarthy", "2000", "1/1/18");
  book3 = new Book("it", "sk", 200, "jan 1");
  book4 = new Book("the shining", "sk", 200, "dec 1");

});
