// Event-Driven Programming

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// const sayHello = () => {
//   console.log("Hello User");
// }

// const sayHi = () => {
//   console.log("Hi User");
// }

// const greetNewYear = () => {
//   console.log("Happy New Year");
// }


// myEmitter.on("userJoined", sayHello);
// myEmitter.on("userJoined", sayHi);
// myEmitter.on("userJoined", greetNewYear);

// myEmitter.emit('userJoined');

const greetBirthday = (name, newAge) => {
  console.log(`Happy Birthday ${name}. You are now ${newAge}`);
}

myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'Rohit', 26);