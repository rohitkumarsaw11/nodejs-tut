// Short Note on `module.exports`

const myModule = require('./myModule');

console.log(myModule.foo);
myModule.myFunction1(); // logs 'Hello from myFunction1!'
myModule.myFunction2(); // logs 'Hello from myFunction2!'