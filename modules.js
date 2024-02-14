// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1"); // we import our Calculator class here with a different name

// defining a new calculaor instance from our Calculator class:
const calc1 = new C();
console.log(calc1.add(2, 3));

// exports

