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
function Click(){
    console.log("Clicked");
    console.log(this);
}




let arr=[10,20,30,40]
let arr2=arr.map(function(item,index){  //item and index
    console.log(index,item);
    return item*2;
})
console.log(arr2);

let arr3=[]
for(let i=0;i<arr.length;i++){
    arr3.push(arr[i]*2)
}
console.log(arr3);