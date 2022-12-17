var express=require("express");
var bodyParser=require("body-parser");
var app=express();
var port=5000;

var users=require("./routes/users");
var jsonParser=bodyParser.json();
app.use(bodyParser.json({type:'application/*+json'}));

app.use("/users",jsonParser,users);
app.listen(port,function(){
    console.log(`Server running at ${port}`);
})