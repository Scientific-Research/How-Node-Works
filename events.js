const EventEmitter = require("events");

// in a real eaxmple, we need to use a class to make an instance from this class!
class Sales extends EventEmitter {
  constructor() {
    super(); // with this, we can get access to all of the methods of parent => EventEmitter
  }
}

// const myEmitter = new EventEmitter();
const myEmitter = new Sales();

// these are two observers and they observe(listen) the emitter and as soon as emitter send a
// new emit => newSale, they will display it in console.log()
// On => Observer or listener => O , O
// we have to set up a listener:
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// we can specify another listener for the same emitter => newSale()
myEmitter.on("newSale", () => {
  console.log("Customer name: Maximilian");
});

// a new observer => listener with argument!
myEmitter.on("newSale", (stock) => {
  console.log(`There are still ${stock} items left in stock!`);
});

// we want to make a new emit: this is the emitter and send the nre emits
myEmitter.emit("newSale", 9);
