// public - anyone can access
// private - available only inside a class
// protected - available inside a class and subclasses
// readonly - property can't be modified
// static - is available directly from class (without instantiation)
class Movie {
  genre: string

  constructor(private readonly title: string, genre: string) {
    this.genre = genre
  }

  getTitle(): string {
    return this.title
  }
}

const bestMovieEver = new Movie("Peaceful Warrior", "Drama")
bestMovieEver /*?*/
bestMovieEver.genre /*?*/
bestMovieEver.getTitle() /*?*/

bestMovieEver.getTitle() /*?*/

Movie.type /*?*/
