const http = require("http");
var users=[
    {
        id:1,
        name:"Tehith",
        age:20
    },
    {
        id:2,
        name:"Sai Tehith",
        age:22
    }
]
var server = http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    console.log("Url is ",req.url," Method is ",req.method)
    if(req.url==='/'){
        console.log("Hello in / program");
        res.writeHead(200,{content:"application/text"})
        res.end("Hello World");
    }
    else if(req.url==='/student'){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify({Name:"Tehith",id:240}))
    }
    else if(req.url==='/users'){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(404,{content:"application/json"})
        res.end("404 File not found")
    }
})
server.listen(5000);