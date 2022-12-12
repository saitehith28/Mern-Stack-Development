function ES6(){
    // String Template
    let msg="Good Morning";
    let result=`Hello ${msg}`;

    // Object Destructuring
    let address={
        state:"Telangana",
        city:"Hyderabad",
        pin:505302
    }
    let {state,city,pin}=address

    // Array Destructuring
    let marks=[10,20];
    let [a,b]=marks;

    // Spread Operator
    function add(a,b,c){
        return a+b+c
    }
    let numbers=[1,2,3]
    var sum=add(...numbers)

    // Rest Parameter
    function showRest(x,y,...z){
        return [x,y,z]
    }
    var [x,y,z]=showRest(2,3,4,5,6)
    return(
        <h1>
            <h6>{result}</h6>
            <h6>{state} {city} {pin}</h6>
            <h6>{a} {b}</h6>
            <h6>{sum}</h6>
            <h6>x={x} y={y} z={z}</h6>
        </h1>
    )
}

export default ES6;