// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1"); // we import our Calculator class here with a different name

// defining a new calculaor instance from our Calculator class:
const calc1 = new C();
console.log(calc1.add(2, 3));

// exports
const calc2 = require("./test-module-2"); // with this kind of exports, we can access to the
// function directly and we don't have a class anymore => we don't need to create a new instance
// of that class!

console.log(calc2.divide(2, 3));
