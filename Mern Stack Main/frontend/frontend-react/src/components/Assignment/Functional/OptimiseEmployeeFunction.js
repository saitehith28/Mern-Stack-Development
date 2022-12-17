import { useState } from "react";
import EmployeeTable from "../EmployeeTable";
function OptimiseEmployeeFunction(){
    
    const [empInfo,setEmpInfo]=useState({name:"",age:"",salary:"",address:""})
    const [savedInfo,setSavedInfo]=useState({});

    function changeName(event){
        setEmpInfo((prev)=>({
            ...prev,
            name:event.target.value
        }));
    }
    function changeAge(event){
        setEmpInfo((prev)=>({
            ...prev,
            age:event.target.value
        }));
    }
    const changeSalary = (event)=>{
        setEmpInfo((prev)=>({
            ...prev,
            salary:event.target.value
        }));
    }
    const changeAddress = (event)=>{
        setEmpInfo((prev)=>({
            ...prev,
            address:event.target.value
        }));
    }
    function saveData(e){
        e.preventDefault();
        setSavedInfo((prev)=>({
            ...prev,
            name:empInfo.name,
            age:empInfo.age,
            salary:empInfo.salary,
            address:empInfo.address
        }))

        setEmpInfo((prev)=>({
            ...prev,
            name:"",
            age:"",
            salary:"",
            address:""
        }))
        // setEmpInfo({name:"",age:"",salary:"",address:""});
    }
    
    return(
        <div>
            <h1>Employee Details using OptimiseEmployeeFunction</h1>
            <form onSubmit={saveData}>
                <label>Name:</label>
                <input type="text" value={empInfo.name} onChange={changeName}></input>
                <label>Age:</label>
                <input type="text" value={empInfo.age} onChange={changeAge}></input>
                <label>Salary:</label>
                <input type="text" value={empInfo.salary} onChange={changeSalary}></input>
                <label>Address:</label>
                <input type="text" value={empInfo.address} onChange={changeAddress}></input>
                <button className="btn btn-primary">Submit</button>
            </form>
            <EmployeeTable empInfo={savedInfo}/>
        </div>
    )
}

export default OptimiseEmployeeFunction;