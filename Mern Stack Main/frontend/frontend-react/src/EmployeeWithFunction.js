import { useState } from "react";

function EmployeeWithFunction(props){
    const [address,setAddress]=useState("Hyd");
    const [name,setName]=useState("Tehith");
    return(
        <div>
            <h1>Hello from Employee Functional based component and name is {props.name} and address is {address}</h1>
            <h4>My name is {name}</h4>
        </div>
    )
}

export default EmployeeWithFunction;