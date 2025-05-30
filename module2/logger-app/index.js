const path = require("path")
const fs = require("fs")
console.log(process.argv)

const inputArguments = process.argv.slice(2)

const text = inputArguments.join(" ").concat("\n")

const timeStamp = new Date().toISOString()
console.log(timeStamp)
const message = `${text} ${timeStamp} \n`
if(!message){
    console.log("Please provide message to logg")
    console.log("Example: node index.js Hellow wold!!")
    process.exit(1)
}

// const filePath = __dirname + "log.txt"
const filePath = path.join(__dirname, "log.txt")

fs.appendFile(filePath, message, {encoding:"utf-8"}, ()=>{
    console.log("Your log added successfully")
})
console.log(filePath)
// console.log(text)
// console.log(inputArguments)

