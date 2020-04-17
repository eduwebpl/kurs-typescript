// Variable types
let counter: number; 
let text: string;
let logic: boolean;

text = 'Lorem ipsum';

// Arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// list.push('test');

// Functions
const play = function (song: string): boolean { 
  console.log(`Playing ${song}`);
  return true; 
}

// play({ name: 'Unforgiven '});
play('Unforgiven');

// Interfaces
interface Coords { x: number, y: number }

function setPosition(position: Coords) {
  return `Current position is set to: ${position}`
}

setPosition({ x: 1, y: 3});

// Decorators
function Rocket() {
  return function(target: any, key: string | symbol) {
    let value = target[key];
    const getter = () => value;
    const setter = (next: string) => {
      value = `${next} 🚀`
    }

    Object.defineProperty(target, key, {
      get: getter, set: setter, enumerable: true, configurable: true
    });
  };
}

class Member {
  @Rocket()
  public name: string
  constructor(name: string) {
    this.name = name
  }
}

const newMember = new Member('Adam');
newMember.name; /*?*/

// Mapped types / TypeScript documentation
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}