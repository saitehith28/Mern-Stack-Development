var express=require("express");
var bodyParser=require("body-parser");
const cors=require("cors");
var mongoose=require("mongoose");
var app=express();
var port=5000;

mongoose.connect("mongodb+srv://saitehith:Tehith028@employee.oaiwqlz.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { 
    console.log('connected to database myDb') 
})
// mongoose.connect("mongodb://saitehith:Tehith028@ac-smptuwp-shard-00-00.xphvdxi.mongodb.net:27017,ac-smptuwp-shard-00-01.xphvdxi.mongodb.net:27017,ac-smptuwp-shard-00-02.xphvdxi.mongodb.net:27017/?ssl=true&replicaSet=atlas-r94ltv-shard-0&authSource=admin&retryWrites=true&w=majority", { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }, () => { 
//     console.log('connected to database myDb ;)') 
// })

app.use(cors());
var employee=require("./routes/employee");
var jsonParser=bodyParser.json();
app.use(bodyParser.json({type:'application/*+json'}));
app.use("/employee",jsonParser,employee);

app.listen(port,function(){
    console.log(`Server Running at ${port}`);
})