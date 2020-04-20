// let & const
var foo = true;
foo = 10; /*?*/
var foo = 5; /*?*/
if (foo) {
  var foo = false; /*?*/
}

foo; /*?*/

let bar = true;
if (bar) {
  let bar = false; /*?*/
}

bar; /*?*/

const baz = true;
baz = false; /*?*/

// Hoisting
a; /*?*/
var a = 5;

// b; /*?*/
let b = 5;

const obj = {};
obj.id = 10;
obj.id; /*?*/

// Template strings
const user = "eduweb";
const message = `Hello ${user}!`; /*?*/
const longMessage = `
  First line...
  ...and a second one 🤯
`;

function tagged(literals, ...placeholders) {
  console.log(literals, placeholders);
}
tagged`tag call is ${"OK"}. Nice, hm?`;

// Arrow functions
const move = (x) => `moved to ${x}`;
move(5); /*?*/

const moveClassic = function (x) {
  return "moved to " + x;
};
moveClassic(5); /*?*/

const multiParams = (x, y) => `moved to ${x} then y`;
const withBody = (x) => {
  return `moved to ${x} then y`;
};
const returnObj = (x) => ({
  message: `moved to ${x} then y`,
});

// Constructor function
function Song(name) {
  this.name = name;
  this.play = function () {
    return this.name; /*?*/
  };
}

const bestSongEver = new Song("Iron man");
setTimeout(bestSongEver.play);

// Classes
class Media {
  constructor(type) {
    this.type = type;
  }
}

class Song extends Media {
  constructor(name) {
    super("song");
    this.name = name;
  }
  play() {
    return `Playing ${this.type}: ${this.name}`;
  }
}

new Song("Iron man").play(); /*?*/

var Song = (function () {
  function Song(name) {
    this.name = name;
  }
  Song.prototype.play = function () {
    return "Playing " + this.name;
  };
  return Song;
})();

// Rest & spread
function manyParams(x, y, ...rest) {
  console.log(x, y, rest);
}

// manyParams(1, 2, 3, 4, 5);

const args = [6, 7, 8, 9];
manyParams(args);
manyParams(...args);

const name = { name: "eduweb" };
const website = { www: "eduweb.pl" };
const profile = { ...name, ...website }; /*?*/

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; /*?*/

// Destructuring
const args = [1, 2, 3, 4];
const [a, b, c, d] = args;
console.log(a, b, c, d);

const coords = { x: 1, y: 10 };
const { x: horizontal, y } = coords;
horizontal; /*?*/
y; /*?*/

const response = { data: { value: 5 } };
function render({ data: { value } }) {
  console.log(value);
}
render(response);

// for .. of
const items = ["a", "b", "c"];
for (let item in items) {
  item;
}

for (let item of items) {
  item;
}

// Callback
const myCallback = function (a, b, callback) {
  setTimeout(function () {
    const sum = a + b;
    callback(sum);
  }, 500);
};

myCallback(1, 2, function (result) {
  console.log(`Callback finished with result: ${result}`);
});

// Promise
const myPromise = function (a, b) {
  return new Promise((res, rej) => {
    const sum = a + b;
    setTimeout(res(sum), 500);
  });
};

console.log(myPromise(1, 3));
myPromise(1, 2)
  .then((result) => `Promise finished with result: ${result}`) /*?*/
  .catch((err) => err); /*?*/

(async function () {
  const result = await myPromise(3, 4);
  console.log(result);
})();
