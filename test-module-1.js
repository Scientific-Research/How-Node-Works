// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator; // we export our class and in modules.js will import it!
// or in an elegant way, we can add exports to any of the methods in Calculator class!

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
};
// we export our class and in modules.js will import it!
// or in an elegant way, we can omit the name of the class and put the module.exports =
// on behind of the class word!
