
const http = require("http")



// const data = [
//     {title : "prisma", body: "learning node", createAt:"5/18/2025, 1:25:02 AM"},
//     {title : "typeScript", body: "learning node", createAt:"5/18/2025, 1:25:02 AM"},
// ]
const path = require("path")
const filePath = path.join(__dirname, "./db/todo.json")
const fs = require("fs")


const server = http.createServer((req, res) =>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname
    console.log(url, "url")
    // console.log({req, res})
    // console.log(req.url, req.method)
    // res.end("Welcome to ToDo App Sever")

    // Get all todos
    if(pathname === "/todos" && req.method === "GET"){
        // res.end("All Todos")
        const data = fs.readFileSync(filePath, {encoding:"utf-8"})
        res.writeHead(200, {
            // "content-type" : "text/plain",
            "content-type" : "application/json",
            // "content-type" : "text/html",
            // "email" : "mukter@gmail.com"
        })

        // res.setHeader("content-type", "text/plain")
        // res.setHeader("email", "mukter2@gmail.com")
        // res.statusCode = 201;
        // res.end("All Todos")
        // res.end(JSON.stringify(data))
        res.end(data)
        // res.end(`<h1>Hello World</h1> <h2>Hello World</h2> <h4>Hello World</h4>`)
    } 
    // Post a toDo
    else if(pathname === "/todos/create-todo" && req.method === "POST"){
        let data = ""
        req.on("data", (chunk) =>{
            data = data + chunk
        })
        
        req.on("end", ()=>{
            // console.log(data)
            // const todo = JSON.parse(data)
            const {title, body} = JSON.parse(data)
            // console.log(todo)
            // console.log({title, body})
            const createAt = new Date().toLocaleString()
            const allTodos = fs.readFileSync(filePath, {encoding : "utf-8"})
            console.log(allTodos)
            const parsedAllTodos = JSON.parse(allTodos)
            parsedAllTodos.push({title, body, createAt})
            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {encoding: "utf-8"})
            console.log(parsedAllTodos)
            res.end(JSON.stringify({title, body, createAt}, null, 2))
        })
        // res.end("Create Todos")
    } else if(pathname === "/todo" && req.method === "GET"){
        const title = url.searchParams.get("title")
        console.log(title, "title also")
        // console.log(pathname, "single todo")
        const data = fs.readFileSync(filePath, {encoding:"utf-8"})
        const parseData = JSON.parse(data)
        const todo = parseData.find((todo) => todo.title === title)
        const stringifiedTodo = JSON.stringify(todo)
        res.writeHead(200, {
            "content-type" : "application/json",
        })
        // res.end("Single todo")
        res.end(stringifiedTodo)
    } 
    // Update Data
    else if(pathname === "/todos/update-todo" && req.method === "PATCH"){
        const title = url.searchParams.get("title")
        let data = ""
        req.on("data", (chunk) =>{
            data = data + chunk
        })
        
        req.on("end", ()=>{
            const {body} = JSON.parse(data);
            const allTodos = fs.readFileSync(filePath, {encoding : "utf-8"})
            const parsedAllTodos = JSON.parse(allTodos)
            const todoIndex = parsedAllTodos.findIndex((todo)=> todo.title === title)
            parsedAllTodos[todoIndex].body = body;
            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {encoding: "utf-8"})
            // console.log(parsedAllTodos)
            res.end(JSON.stringify({title, body, createAt:parsedAllTodos[todoIndex].createAt}, null, 2))
        })
        // res.end("Create Todos")
    }
    // Delete Data
    else if(pathname === "/todos/delete-todo" && req.method === "DELETE"){
        const title = url.searchParams.get("title")
        // res.end("Create Todos")
    }
    else{
        res.end("Todos not found")
    }
})


server.listen(5000, "127.0.0.1", () =>{
    console.log("Server listening to port 5000")
})