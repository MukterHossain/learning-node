let a = 10;
((name)=>{
    let a = 10 // block scope
    console.log(`Learning ${name}`)
})("node")


console.log(a)