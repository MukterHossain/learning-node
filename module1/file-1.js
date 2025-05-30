// const var1 = require("./file-2");
const {a, add, b} = require("./file-2");
const {a :a3, add: add3, b:b3} = require("./file-3");

// console.log(var1.a)
// console.log(var1.add(2,5))
console.log(a)
console.log(a3)
console.log(b)
console.log(b3)
console.log(add(2,5))
console.log(add3(2,5, 3))

// console.log(module)