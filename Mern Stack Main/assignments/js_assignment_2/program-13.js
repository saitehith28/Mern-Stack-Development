// Call and Apply = Using call and apply we can call the member of person1 object from person2 object.
// The difference between call and apply is
// call() method takes arguments separately.
// apply() method takes arguments as an array.

// Bind = using bind we can get the function of person1 object from person2 object.
// bind will return the function.

let person1={
    name:"Tehith",
    age:20,
    branch:"AI",
    displayUsingCall(year,marks){
        console.log("Name=",this.name);
        console.log("Age=",this.age);
        console.log("Branch=",this.branch);
        console.log("Year=",year);
        console.log("Marks=",marks);
    },
    displayUsingApply(year,cgpa){
        console.log("Name=",this.name);
        console.log("Age=",this.age);
        console.log("Branch=",this.branch);
        console.log("Year=",year);
        console.log("CGPA=",cgpa)
    },
    displayUsingBind(){
        console.log("Name=",this.name);
        console.log("Age=",this.age);
        console.log("Branch=",this.branch);
    }
}
let person2={
    name:"Teja",
    age:22,
    branch:"CSE",
}
console.log("Printing using first person");
person1.displayUsingCall("3rd",[10,20,30,40]);

console.log("Using Call");
person1.displayUsingCall.call(person2,"4th",[50,60,70,80]);

console.log("Using Apply");
person1.displayUsingApply.apply(person2,["4th",9.8]);

console.log("Using Bind");
let result=person1.displayUsingBind.bind(person2);
console.log(result);
result();