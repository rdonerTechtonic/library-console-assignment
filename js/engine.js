function Library()
{
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {

};

Library.prototype.removeBookByTitle = function(title) {

};




document.addEventListener("DOMContentLoaded", function(e) {
//add global instance
  window.gLibrary = new Library();

});
