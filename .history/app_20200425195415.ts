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