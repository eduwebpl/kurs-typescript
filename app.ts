abstract class Media {
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

  abstract like(media_id: number, user_id: number): boolean
}

const media = new Media("Syntax.fm", "podcast", "Web dev podcast", 0)
media.type /*?*/

class Movie extends Media {
  constructor(name: string, genre: string, duration: number) {
    super(name, "movie", genre, duration)
  }

  like(media_id: number, user_id: number) {
    return true
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
