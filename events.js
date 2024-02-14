const EventEmitter = require("events");

const myEmitter = new EventEmitter();

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
// we want to make a new emit: this is the emitter and send the nre emits
myEmitter.emit("newSale");
