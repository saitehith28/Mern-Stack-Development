var express=require("express");
const bodyParser=require("body-parser");
var app=express();
var port=5000;

var users=require("./routes/users");
const { json } = require("express");
var jsonParser=bodyParser.json();
app.use(bodyParser,json({type:'application/json'}));

app.use("/users",jsonParser,users);
app.listen(port,function(){
    console.log(`Server running on ${port}`);
});



























// function checkRoles(req,res,next){
//     console.log("I am middleware");
//     res.send("You dont have access");
//     next();
// }
// app.use(checkRoles)

// router.use(function(req,res,next){
//     console.log("Hello I am getting routes");
//     res.send("I am routes");
//     next();
// })
// app.use("/user",router)

// app.get("/",function(req,res){
//     res.send("Hello from express.js");
// });

// app.get("/student",function(req,res){
//     res.send("<html><body><h1>Hello from student</h1></body></html>");
// })

// app.get("/user",function(req,res){
//     res.send({id:1,name:"Tehith"});
// })