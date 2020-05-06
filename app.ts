// Function Constructor Syntax
function Movie(title) {
  this.title = title
}

Movie.prototype.getTitle = function () {
  return this.title
}

// Movie() /*?*/
const bestMovieEver = new Movie("Peaceful Warrior") /*?*/
bestMovieEver /*?*/

bestMovieEver.getTitle() /*?*/

// Class Syntax

class Movie {
  constructor(private title: string) {}

  getTitle(): string {
    return this.title
  }
}

const bestMovieEver = new Movie("Peaceful Warrior")
bestMovieEver /*?*/

bestMovieEver.getTitle() /*?*/
