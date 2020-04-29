// Parameter types
type Song = { title: string; duration: number; genre: string }
const song = { title: "Eye of the tiger", duration: 213, genre: "rock" }

function play(song: Song) {
  return `Playing now: ${song}`
}

play(song) /*?*/

// Optional parameters
function addToPlaylist(song, playlist?: string) {
  if (!playlist) playlist = "Default"
  return `Added ${song.title} to playlist: ${playlist}`
}

addToPlaylist(song) /*?*/

// Default parameters
function addToPlaylist(song, playlist = "Default") {
  return `Added ${song.title} to playlist: ${playlist}`
}

addToPlaylist(song) /*?*/
