interface Playable {
  name: string
  play(): string
}

function play(media: Playable) {
  return media.play()
}

const movie = {
  name: "Lord of the Rings",
  play() {
    return `Playing ${this.name}`
  },
}
play(movie) /*?*/
