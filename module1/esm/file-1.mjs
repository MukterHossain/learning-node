// const var1 = require("./file-2");
// const {a, add, b} = require("./file-2");
// const {a :a3, add: add3, b:b3} = require("./file-3");
// import {a, add, b} from "./file-2.mjs"
import {a, b} from "./file-2.mjs"
import add from "./file-2.mjs"  // any name for  export default

import {a as A3, b as B3, add as ADD3} from "./file-3.mjs"

// console.log(var1.a)
// console.log(var1.add(2,5))
console.log(a)
console.log(A3)
console.log(b)
console.log(B3)
// console.log(add(2,5))
console.log(add.add(2,5))
console.log(ADD3(2,5, 3))

// console.log(module)