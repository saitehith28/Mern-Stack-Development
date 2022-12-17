import { useState } from "react";
import EmployeeTable from "../EmployeeTable";
function EmployeeFunction(){
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [salary,setSalary]=useState(0);
    const [address,setAddress]=useState("");
    
    const [empInfo,setEmpInfo]=useState({name:"",age:"",salary:"",address:""})

    function changeName(e){
        setName(e.target.value)
    }
    function changeAge(e){
        setAge(e.target.value);
    }
    const changeSalary = (e)=>{
        setSalary(e.target.value);
    }
    const changeAddress = (e)=>{
        setAddress(e.target.value);
    }
    function saveData(e){
        e.preventDefault();
        setEmpInfo((prevState)=>({
            ...prevState,
            name:name,
            age:age,
            salary:salary,
            address:address
        }))
        setName("");
        setAge("");
        setSalary("");
        setAddress("");
    }
    
    return(
        <div>
            <h1>Employee Details using Function</h1>
            <form onSubmit={saveData}>
                <label>Name:</label>
                <input type="text" value={name} onChange={changeName}></input>
                <label>Age:</label>
                <input type="text" value={age} onChange={changeAge}></input>
                <label>Salary:</label>
                <input type="text" value={salary} onChange={changeSalary}></input>
                <label>Address:</label>
                <input type="text" value={address} onChange={changeAddress}></input>
                <button className="btn btn-primary">Submit</button>
            </form>
            <EmployeeTable empInfo={empInfo}/>
        </div>
    )
}

export default EmployeeFunction;