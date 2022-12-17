import { useState } from "react";
function EmpForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [empInfo,setEmpInfo]=useState({name:"",age:0})
    function onNameChange(event){
        setName(event.target.value)
    }
    const onAgeChange = (event)=>{
        setAge(event.target.value)
    }
    const save = (e)=>{
        e.preventDefault();
        console.log(name,age);
        console.log("Data Saved Successfully");
        setEmpInfo((prevState)=>({
            ...prevState,
            name:name,
            age:age
        }))
        // setEmpInfo({name:name,age:age});
    }
    return (
        <div>
            <form onSubmit={save}>
                <label>Name:</label>
                <input type="text" value={name} onChange={onNameChange}></input>
                <label>Age:</label>
                <input type="text" value={age} onChange={onAgeChange}></input>
                <button type="submit">Submit</button>
            </form>
            <h2>Save Employee Information</h2>
            <h4>{empInfo.name}</h4>
            <h4>{empInfo.age}</h4>
        </div>
    )
}

export default EmpForm;