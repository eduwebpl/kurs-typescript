class Media {
  public progress = 0

  constructor(
    readonly name: string,
    public readonly type: string,
    public readonly genre: string,
    public readonly duration: number,
  ) {}

  play() {
    this.progress += 1
  }
}

class Movie extends Media {
  constructor(name: string, genre: string, duration: number) {
    super(name, "movie", genre, duration)
  }
}

class Song extends Media {
  constructor(name: string, genre: string, duration: number) {
    super(name, "song", genre, duration)
  }
}

const bestMovieEver = new Movie("Peaceful Warior", "Drama", 7200)
bestMovieEver.play()
bestMovieEver.progress /*?*/
const bestSongEver = new Song("Heart of Courage", "Cinematic", 117)
bestSongEver.type /*?*/
bestSongEver.play()
bestSongEver.progress /*?*/
