var mongoose=require("mongoose");   //ODM Object Data Modeling or ORM
var Schema=mongoose.Schema
var employeeSchema=new Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String},
    mobile:{type:String}
})
module.exports=mongoose.model('Employee',employeeSchema);