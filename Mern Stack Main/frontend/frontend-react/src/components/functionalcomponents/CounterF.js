import { useState } from "react";
function CounterF(props){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Tehith");
    const [temp,setTemp]=useState("");
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function handleChange(e){
        setTemp(e.target.value)
    }
    function change(){
        setName(temp);
    }
    return(
        <div>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={()=>decrement()}>Decrement</button>
            <h1>Count : {count}</h1>
            <h2>My name is {name}</h2>
            <input type="text" onChange={handleChange}></input>
            <button className="btn btn-primary" onClick={change}>Change</button>
        </div>
    )
}

export default CounterF;