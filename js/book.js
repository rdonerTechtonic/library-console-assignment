function Book(title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
  // var date = new Date(pubDate);
  // this.pubDate = date.getUTCFullYear();
  // this.pubDate = new Date(pubDate);
};

Book.prototype.editBook = function(oBook) {

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
