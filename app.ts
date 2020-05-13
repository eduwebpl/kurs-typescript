// Type aliases vs Interface

type Player = {
  name: string
}

function show(player: Player) {}

interface Game {
  name: string
}

function play(game: Game) {}

// Computed properties
type Types = "finite" | "infinite"

type Games = {
  [type in Types]: string
}

// Merge
interface User {
  name: string
}

interface User {
  email: string
}

function info(user: User) {}
info({ name: "Adam", email: "adam@eduweb.pl" })

//  Extends
interface Admin extends User {
  is_admin: boolean
  specialpowers?: boolean
}

// Extends multiple
interface Superadmin extends Admin, User {
  godmode: boolean
}

// Duck typing // structural typing
interface Readable {
  pages: number
}

interface Book {
  pages: number
  title: string
}

const book: Book = {
  pages: 5,
  title: "The one thing",
}

function read(something: Readable) {
  return `Started reading ${something.pages} pages`
}

read(book) /*?*/
