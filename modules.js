// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1"); // we import our Calculator class here with a different name

// defining a new calculaor instance from our Calculator class:
const calc1 = new C();
console.log(calc1.add(2, 3));

// exports
const calc2 = require("./test-module-2"); // with this kind of exports, we can access to the
// OR destructuring in this way:
// const { add, multiply, divide } = require("./test-module-2"); // with this kind of exports, we can access to the
// function directly and we don't have a class anymore => we don't need to create a new instance
// of that class!
// OR destructuring in this way:
// const { add, multiply, divide } = calc2; // destructuring works well too in this way
const { divide } = calc2; // destructuring works well too in this way

console.log(divide(2, 3));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
