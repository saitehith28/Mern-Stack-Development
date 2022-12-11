console.log("Hello learning")

// function add(a,b){
//     console.log(a+b);
// }
// add(39,40)

var module = require("./module.js")
console.log(module);
module.add(39,40);

var calculatorModule = require("./calculator.js")
console.log(calculatorModule);
console.log(calculatorModule.calculator.add(39,40))
console.log(calculatorModule.calculator.subtract(39,40))
console.log(calculatorModule.calculator.multiply(39,40))



