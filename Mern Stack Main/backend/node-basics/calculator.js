function add(a,b){
    console.log("Sum of two numbers = ",a+b)
}

function subtract(a,b){
    console.log("Subtraction of two numbers = ",a-b)
}

function multiply(a,b){
    console.log("Multiply of two numbers = ",a*b)
}

exports.calculator = {
    add,
    subtract,
    multiply
}