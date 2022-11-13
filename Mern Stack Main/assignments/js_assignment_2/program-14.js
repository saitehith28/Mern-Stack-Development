// Hoisting = A variable can be used before it has been declared
// By default js engine will declare all the declarative statements at the top with value undefined
console.log(x);
var x=10;
console.log(x);