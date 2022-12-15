var express=require("express");

var app=express();
app.get("/",function(req,res){
    res.send("Hello from express.js");
});

app.get("/student",function(req,res){
    res.send("<html><body><h1>Hello from student</h1></body></html>");
})

app.get("/user",function(req,res){
    res.send({id:1,name:"Tehith"});
})

app.listen(5000,function(){
    console.log("Server started at localhost:5000");
});