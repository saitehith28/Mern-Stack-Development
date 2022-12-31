var express=require("express");
var bodyParser=require("body-parser");
const cors=require("cors");
var mongoose=require("mongoose");
var app=express();
var port=5000;
// mongoose.connect("mongodb://localhost:27017/emp_Curd")


// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");
//     res.header("Access-Control-Allow-Headers","Origin,Content-Range","X-Content-Range,Content-Type,Accept");
//     next();
// })
app.use(cors());
// var users=require("./routes/users");
var employee=require("./routes/employee");
var jsonParser=bodyParser.json();
app.use(bodyParser.json({type:'application/*+json'}));

// app.use("/users",jsonParser,users);
app.use("/employee",jsonParser,employee);
app.listen(port,function(){
    console.log(`Server running at ${port}`);
})
