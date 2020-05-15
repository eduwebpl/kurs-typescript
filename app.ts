interface Playable {
  name: string
  play(): string
}

class Movie implements Playable {
  constructor(public name: string) {}

  play() {
    return `Playing ${this.name}`
  }
}

function play(media: Playable) {
  return media.play()
}

const movie = new Movie("Lord of the Rings")
play(movie) /*?*/
