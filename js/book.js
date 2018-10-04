function Book(title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate; //use a date object
};

Book.prototype.editBook = function(oBook) {

  //oBook.title
  //oBook.author
  //oBook.numPages
  //oBook.publishDate

  //gLibrary.bookShelf[0].editBook();
  // console.log(this);
  // }
  //for each property, replace the book property with the matching property
  // {title: "string", author: "string", numPages: num}

if (oBook.hasOwnProperty("title")) {
  this.title = oBook.title;
}
if (oBook.hasOwnProperty("author")) {
  this.author = oBook.author;
}
if (oBook.hasOwnProperty("numPages")) {
  this.numPages = oBook.numPages;
}

return this;



// console.log(Object.keys(oBook));
//   for (var property in Object.keys(oBook)) {
//     if (this.hasOwnProperty(Object.keys(oBook)[property])) {
//       this.property = property;
//       console.log('hi')
//     // }
//   }
//   return this;
// }
}
