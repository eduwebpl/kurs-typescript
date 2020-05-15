interface Playable {
  name: string
  play?(): string
}

interface Play {
  (media: Playable): string
}

let playMedia: Play
playMedia = function play(media: Playable): string {
  if (media.play) {
    return media.play()
  }

  return `Can't play ${media.name}`
}

const movie: Playable = {
  name: "Lord of the Rings",
  play() {
    return `Playing ${this.name}`
  },
}

playMedia(movie) /*?*/
