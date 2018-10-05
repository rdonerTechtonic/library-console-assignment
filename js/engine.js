function Library() {
  this.bookShelf = new Array();
};

// (function() {//SINGLETON
//  var instance;
//  Library = function() {
//    if (instance) { //if a instance of library already exists this will point the newly made library to the Singleton instance
//      return instance;
//    }
//    instance = this; //if a instance of library does not yet exist this will get and set the instance name for the new library
//  }
// })();

// @param {Book} book

//input = gLibrary.addBook(new Book("test3","ryan","1","1"))
Library.prototype.addBook = function(book) {
  //check if title exists already in bookShelf
  // input is made lowercase: book.title = book.title.toLowerCase();
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === book.title) {
      //if the title already exists return false
      return false;
    }
  }
  //add new book onto the end of the array
  this.bookShelf.push(new Book(book));
  //save to localStorage
  this.saveLibrary();

  return true;
}

Library.prototype.removeBookByTitle = function(title) {
  //loop over bookshelf and check if the input title is equal to any of the book titles.
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === title) {
      //if the title is found, then remove that book from the array.
      this.bookShelf.splice(i, 1);
      //save to localStorage
      this.saveLibrary();
      return true;
    }
  }
  //if no book with title found, return false
  return false;
}

Library.prototype.removeBookByAuthor = function(author) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].author === author) {
      //remove book from array if the author is found
      this.bookShelf.splice(i, 1);
      //splice bug with multiple authors in a row
      i--;
      this.saveLibrary();
      return true;
    }
  }

  return false;
}

Library.prototype.getRandomBook = function() {
  if (filteredArr.length === 0) {
    return null;
  }
  //create a random integer from 0 to the length of the bookShelf array
  var randomIndex = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[randomIndex];
}

//REFACTOR = handling an input with uppercase letters and removing white space. toLowerCase, .trim
Library.prototype.getBookByTitle = function(title) {
  //filter the array by whether each object contains the title
  return filteredArr = this.bookShelf.filter(
    function(book) {
      //filter function: return true if the title is found
      return (book.title.indexOf(title) !== -1);
    });
}


Library.prototype.getBookByAuthor = function(author) {
  //same as getBookByTitle but with author
  var filteredArr = this.bookShelf.filter(
    function(book) {
      return (book.author.indexOf(author) !== -1);
    });
}

Library.prototype.addBooks = function(books) {
  //loop through the length of the input array and call the addBook function for each one.
  booksAdded = 0;
  for (var i = 0; i < books.length; i++) {
    this.addBook(books[i]);
    //add to books added placeholder
    booksAdded++;
  }
  return booksAdded;
}




Library.prototype.getAuthors = function() {
  var uniqueAuthors = [];
  var count = 0;
  var found = false;

//for each object in the bookShelf check if there is an existing author in the uniqueAuthors array
  for (var i = 0; i < this.bookShelf.length; i++) {
    for (var j = 0; j < uniqueAuthors.length; j++) {
      if (this.bookShelf[i].author == uniqueAuthors[j]) {
        found = true;
      }
    }
    count++;
    //if there is only one author in the bookShelf and it is not found in the uniqueAuthors array,
    //push to the uniqueAuthors array.
    if (count == 1 && found == false) {
      uniqueAuthors.push(this.bookShelf[i].author);
    }
    count = 0;
    found = false;
  }
  return uniqueAuthors;
}

Library.prototype.getRandomAuthorName = function() {
  //find a random book and then get the author in that random book
  if (this.bookShelf.length === 0) {
    return null;
  }
  var randomIndex = Math.floor(Math.random() * this.bookShelf.length);
  return this.bookShelf[randomIndex].author;
}

Library.prototype.searchFunction = function(oBook) {
  //if the input has a certain field, check if the input has a match in the bookShelf.
  //If there is a match, then push onto the retrievedBooks array.
  var retrievedBooks = [];
  if (oBook.hasOwnProperty("title")) {
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (oBook.title === this.bookShelf[i].title) {
        retrievedBooks.push(this.bookShelf[i]);
      }
    }
  }
  if (oBook.hasOwnProperty("author")) {
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (oBook.author === this.bookShelf[i].author) {
        console.log("Works");
        retrievedBooks.push(this.bookShelf[i]);
      }
    }
  }
  if (oBook.hasOwnProperty("numPages")) {
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (oBook.numPages === this.bookShelf[i].numPages) {
        retrievedBooks.push(this.bookShelf[i]);
      }
    }
  }
  if (oBook.hasOwnProperty("pubDate")) {
    for (var i = 0; i < this.bookShelf.length; i++) {
      if (oBook.pubDate === this.bookShelf[i].pubDate) {
        retrievedBooks.push(this.bookShelf[i]);
      }
    }
  }
  return retrievedBooks;
}

Library.prototype.saveLibrary = function() {
//turn the bookShelf into a string, the save it to localStorage as "library"
  localStorage.setItem("library", JSON.stringify(this.bookShelf));
}

Library.prototype.getLibrary = function() {
  //parse localStorage string then for each book found, run the addBook function
  var books = JSON.parse(localStorage.getItem("library"));
  for (var i = 0; i < books.length; i++) {
    this.addBook(books[i]);
  }
  return this.bookShelf;
}

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library;

if(localStorage.getItem("library")) {
  gLibrary.getLibrary();
}

  window.gLibrary.bookShelf[0] = new Book("harry potter", "jk", "1000", "10/10/10");
  window.gLibrary.bookShelf[1] = new Book("all the pretty horses", "jk", "2000", "1/1/18");
  window.gLibrary.bookShelf[2] = new Book("it", "a", 200, "jan 1");
  window.gLibrary.bookShelf[3] = new Book("the shining", "e", 200, "dec 1");
  window.gLibrary.bookShelf[4] = new Book("book", "f", 200, "dec 1");
  window.gLibrary.bookShelf[5] = new Book("book2", "d", 200, "dec 1");
  //
  book1 = new Book("harry potter", "jk rowling", "1000", "10/10/10");
  book2 = new Book("all the pretty horses", "cormac mccarthy", "2000", "1/1/18");
  book3 = new Book("it", "sk", 200, "jan 1");
  book4 = new Book("the shining", "sk", 200, "dec 1");


});
