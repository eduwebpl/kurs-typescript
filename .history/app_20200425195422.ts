// String literal types
let coffeeSize: "medium" | "large"
coffeeSize = "medium"
coffeeSize = "small"

// Union Type
let stringOrNumber: string | number
stringOrNumber = 255
stringOrNumber = "max"

type doubleAnything = string | number

function double(value: doubleAnything): number {
  if (typeof value === "string") {
    return parseInt(value) * 2
  }

  return value * 2
}

// Unknown values
type maybeValue = string | undefined
let valuefromDOM

function show(value: maybeValue) {
  return value
}

show(valuefromDOM)

// Intersection types
interface Knife {
  slice(): string
}
interface Scissors {
  cut(): string
}

type multiTool = Knife & Scissors

function useTool(tool: multiTool) {
  tool.cut() /*?*/
  tool.slice() /*?*/
}

const swissArmyKnife: multiTool = {
  slice() {
    return "slice!"
  },
  cut() {
    return "cut!"
  },
}

useTool(swissArmyKnife)
