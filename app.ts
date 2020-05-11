class Movie {
  constructor(private _title: string) {}

  private set title(title: string) {
    this._title = `${title}!`
  }

  private get title() {
    return this._title.toUpperCase()
  }
}

const bestMovieEver = new Movie("Peaceful Warior")
bestMovieEver.title = "Peaceful Warrior" // setter
bestMovieEver.title /*?*/ // getter
