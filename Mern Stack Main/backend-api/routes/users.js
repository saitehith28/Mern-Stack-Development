var express=require("express");
var router=express.Router();
var users=[
    {
        name:"Tehith",
        age:30,
        phone:9121645842
    }
]
router.get("/",function(req,res){
    res.send("I am user router")
})
router.post("/create",function(req,res){
    console.log(req.body);
    const {name,age,phone}=req.body;
    users.push({name,age,phone});
})
module.exports=router;