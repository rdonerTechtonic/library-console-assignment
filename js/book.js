// function Book(title, author, numPages, pubDate) {
//   this.title = title;
//   this.author = author;
//   this.numPages = numPages;
//   this.pubDate = pubDate;
//   var date = new Date(pubDate);
//   this.pubDate = date.getUTCFullYear();
//   // this.pubDate = new Date(pubDate);
// };

function Book(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this.numPages = obj.numPages;
  this.pubDate = new Date(obj.pubDate);
};

Book.prototype.editBook = function(oBook) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === book.title) {
      
  this.title = oBook.title || this.title;
  this.author = oBook.author || this.author;
  this.numPages = oBook.numPages || this.numPages;
  this.pubDate = oBook.pubDate || this.pubDate;



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
}

// var properties = Object.keys(oBook);
//  console.log(properties);
// // console.log(Object.keys(oBook));
//   for (var i=0; i<properties.length; i++) {
//     if (this.hasOwnProperty(properties[i])) {
//       console.log(oBook.i);
//       // console.log(this)
//     // }
//   // }
// }
// return this;
