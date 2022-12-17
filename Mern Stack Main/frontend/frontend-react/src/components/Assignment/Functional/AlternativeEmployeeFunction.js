import { useState } from "react";
import EmployeeTable from "../EmployeeTable";
function AlternativeEmployeeFunction(){
    
    const [isSaved,setSaved]=useState(false);
    const [empInfo,setEmpInfo]=useState({name:"",age:"",salary:"",address:""})

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
        setSaved(true);
        // setEmpInfo({name:"",age:"",salary:"",address:""});
    }
    
    return(
        <div>
            <h1>Employee Details using AlternativeEmployeeFunction</h1>
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
            {isSaved && <EmployeeTable empInfo={empInfo}/>}
        </div>
    )
}

export default AlternativeEmployeeFunction;