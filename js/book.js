function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;  //use a date object
};

Book.prototype.editBook = function(oBook)

//oBook.title
//oBook.author
//oBook.numPages
//oBook.publishDate

{
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === oBook.title) {
      this.bookShelf[i].author = oBook.author;
      this.bookShelf[i].numPages = oBook.numPages;
      this.bookShelf[i].pubDate = oBook.pubDate;

      return this.bookShelf[i];
    }
  }
  return false;
};
