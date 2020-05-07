class Movie {
  constructor(private title: string) {}

  getTitle(): string {
    return this.title
  }
}

const bestMovieEver = new Movie("Peaceful Warrior")
bestMovieEver /*?*/

bestMovieEver.getTitle() /*?*/
