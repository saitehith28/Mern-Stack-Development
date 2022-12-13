let user={
    name:"Tehith",
    show:()=>{
        console.log(this); //window
        console.log("Hello in arrow",this.name);
    },
    show2:function(){
        console.log(this); //user
        console.log("Hello in normal",this.name);
    }
}
user.show();
user.show2();