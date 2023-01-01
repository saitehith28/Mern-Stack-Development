var mongoose=require("mongoose");
var Schema=mongoose.Schema
var employeeSchema=new Schema({
    id:{type:Number},
    name:{type:String},
    age:{type:Number},
    email:{type:String},
    mobile:{type:String}
})
module.exports=mongoose.model('Employee',employeeSchema);