// function changeMe(){
//     document.getElementById("box").innerHTML="color changed";
//     document.getElementById("box").style.backgroundColor="blue";
// }
// var a=30,b=40;
// console.log(a+b);
// alert("Hello I am alert");
// var a=prompt("Enter the number:");
var x=30,y=50
console.log(x+y);
document.write(x+y);
// alert(x+y)
x="Tehith"
document.write(x);
x=true;
document.write(x);
x=[1,2,3,4]
document.write(x);
x={
    name:"Tehith"
}
document.write(x.name);
function sayHello(){
    console.log("Hello in sayHello function");
}
document.write(x);
sayHello();

// DataTypes in js
// number,boolean,string,array,undefined,null,object,function

// Number
a=30
console.log(a);
console.log(typeof a);

// Boolean
a=true
console.log(a);
console.log(typeof a);

// String
a="Tehith"
console.log(a);
console.log(typeof a);

// Array
a=[1,2,3,4]
console.log(a);
console.log(typeof a);

// undefine
a=undefined
var x;
console.log(a);
console.log(typeof a);
console.log(typeof x);

// null
a=null
console.log(a);
console.log(typeof a);

// object
a={
    name:"Tehith",
    age:20
}
console.log(a);
console.log(a["name"]);
console.log(a.age);
console.log(typeof a);

// function
a=function sayHi(){
    console.log("I am sayHi function")
}
console.log(a);
console.log(typeof a);

a=[1,2,3,4,"Tehith"]
console.log(a[0]);
console.log(a[4]);