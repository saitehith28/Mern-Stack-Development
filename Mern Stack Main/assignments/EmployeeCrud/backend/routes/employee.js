var express=require("express");
var router=express.Router();
var Employee=require("../models/employee");

router.post("/create",function(req,res){
    let employee=new Employee(req.body);
    console.log(employee);
    employee.save().then((data)=>{
        console.log(data);
        res.send("Employee Created Successfully");
    })
})

router.get("/getAllEmployee",function(req,res){
    Employee.find().then((data)=>{
        res.send(data);
    })
})

router.delete("/:id/deleteEmployee",function(req,res){
    Employee.findByIdAndDelete(req.params.id).then(function(){
        res.send("Employee Deleted Successfully");
    })
})

router.put("/:id/updateEmployee",function(req,res){
    let updatedObject={...req.body}
    Employee.findByIdAndUpdate(req.params.id,updatedObject).then(function(data){
        res.send("Employee Updated Successfully");
    })
})

module.exports=router;