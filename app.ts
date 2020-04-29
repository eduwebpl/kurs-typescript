// Type assertion
type Game = { title: string; genre: string; released: boolean }

const game: Game = {
  title: "Grand Theft Auto V",
  genre: "Action",
  released: true,
}
const serializedGame = JSON.stringify(game)

const gameObj = JSON.parse(serializedGame) as Game
gameObj.genre

const input = <HTMLInputElement>document.querySelector(".input")
input.value

// Type aliases
type NumberAlias = number
type CoffeeSize = "medium" | "large"
let coffeeSize: CoffeeSize

function order(coffee: CoffeeSize) {
  return `Ordered ${coffee}`
}
