var express=require("express");
var router=express.Router();
var users=[
    {
        id:1,
        name:"Tehith",
        age:20,
        phone:9121645842
    }
]

router.get("/",function(req,res){
    res.send(users);
})

router.post("/create",function(req,res){
    console.log("Req=============================================================================",req,"Reqparams=",req.params);
    console.log(req.body);
    const {id,name,age,phone}=req.body;
    users.push({id,name,age,phone});
    res.send("User Created Successfully");
})

router.delete("/:id/delete",function(req,res){
    console.log("Reqparams",req.params);
    let filteredUsers=users.filter(function(item){
        return Number(item.id)!=Number(req.params.id);
    });
    users=[...filteredUsers];
    res.send("User deleted successfully");
})

router.put("/:id/update",function(req,res){
    // var i;
    // for(i of users){
    //     if(i.id==Number(req.params.id)){
    //         console.log(i)
    //         i.name="Taduka Sai Tehith"
    //     }
    // }
    //for(i=0;i<users.length;i++)
    for(i of users){
        if(i.id==Number(req.params.id)){
            i.id=req.body.id;
            i.name=req.body.name;
            i.age=req.body.age;
            i.phone=req.body.phone;
        }
    }
    res.send("User Updated Successfully");
})

module.exports=router;