
//1. Syncronous 
// file read / I/O Intensive task => single thread => not go thread pool =>


// 2. Asyncronous
// file read => single thread => event loop => task completion 

// const fs = require("fs");
// console.log("task 1")
// const text = "Learning File System";
// fs.writeFileSync("./hello.txt", text)
// console.log("task 3")
// const data = fs.readFileSync("./hello.txt", {encoding:"utf-8"});
// console.log("task 4")
// console.log(data)


// const fs = require('fs');

// console.log('task 1')
// let text = 'Node js'

// fs.writeFile("./hello.txt", text, {encoding: "utf-8"}, (err) =>{
//     if(err){
//         console.log("something went wrong", err)
//         return;
//     }

//     fs.readFile('./hello.txt', {encoding:"utf-8"}, (err, data) =>{
//     if(err){
//         console.log("something went wrong", err)
//         return;
//     }
//     console.log('Written successfully')
// });
    
// })




// fs.readFile('./hello.txt', {encoding:"utf-8"}, (err, data) =>{
//     if(err){
//         console.log("something went wrong", err)
//         return;
//     }
//     text = data;
//     console.log(data, 'inside callback')
// });

// console.log(text)
// console.log('task 3')



const fs = require('fs');
const readStream = fs.createReadStream("./hello-world.txt", {encoding:"utf-8"})
const writeStream = fs.createWriteStream("./hello.txt", {encoding:"utf-8"})

readStream.on("data", (data) => {
    console.log(data)
    writeStream.write(data, (err) =>{
        if(err){
            throw Error("Error", err)
        }
    })
})

readStream.on("error", (err) =>{
    if(err){
            throw Error("Error", err)
        }
})
writeStream.on("error", (err) =>{
    if(err){
            throw Error("Error", err)
        }
})

readStream.on("end", ()=>{
    console.log("reading ended")
    writeStream.end()
})

writeStream.on("finish", ()=>{
    console.log("Written successfully")
})