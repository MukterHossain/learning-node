const a = 10;
const b = 20;
const c = 30

const add = (param1, param2) => param1 + param2;


// ****************************** common js moduler system ************************************
// module.exports = add;
// module.exports = {
//     a, 
//     add, 
//     b
// };

// console.log(module)
// ****************************** ESM moduler system ************************************
// export {
//     a, 
//     add, 
//     b
// };
export {
    a, 
    b
};

// export default add;
export default {add, c};