// Equality
1 == "1"; /*?*/
1 === "1"; /*?*/

"" == "0"; /*?*/
"" == 0; /*?*/
"" === "0"; /*?*/
"" === 0; /*?*/

// References
let x = 10;
let y = x;
x; /*?*/
y; /*?*/
y = 2;
x; /*?*/

let obj = {};
let refObj = obj;

obj.id = 123;
console.log(refObj.id);

let data = {};
let ref = data;
let moreData = {};

data === ref; /*?*/
data === moreData; /*?*/

// Null vs undefined
null == undefined; /*?*/
let somevar; // undefined
somevar != null; /*?*/

// root level undefined
typeof globalVar !== "undefined"; /*?*/

// this
function sayYo() {
  return `Yo! ${this}`;
}
sayYo(); /*?*/

const myObj = { welcome: sayYo };
myObj.welcome(); /*?*/

// closure
function outer() {
  const outsideScopeVar = "out of the box";
  function inner() {
    return outsideScopeVar;
  }

  return inner;
}

const getInner = outer();
getInner(); /*?*/

// truthy & falsy values
if (1) {
  console.log("ok! 😁");
}
if (0) {
  console.log("not ok! 🙁");
}

// bang bang
!!""; /*?*/
!!0; /*?*/
!!NaN; /*?*/
!!null; /*?*/
!!undefined; /*?*/
!!{}; /*?*/
!![]; /*?*/
