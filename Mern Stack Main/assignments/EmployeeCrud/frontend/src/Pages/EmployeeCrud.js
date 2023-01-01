import { useState,useEffect } from "react";

function EmployeeCrud(){
    const [emp,setEmp]=useState({});
    const [emps,setEmps]=useState([]);
    const [isUpdate,setIsUpdate]=useState(false);
    const [tempId,setTempId]=useState();

    function getUsersFromServer(){
        fetch("http://localhost:5000/employee/getAllEmployee/").then(function(res){
            return res.json();
        }).then(function(data){
            setEmps(data);
        })
    }
    useEffect(()=>{
        getUsersFromServer();
    },[])
    const handleIdChange=(e)=>{
        setEmp((prev)=>({
            ...prev,
            id:e.target.value
        }))
    }
    const handleNameChange=(e)=>{
        setEmp((prev)=>({
            ...prev,
            name:e.target.value
        }))
    }
    const handleAgeChange=(e)=>{
        setEmp((prev)=>({
            ...prev,
            age:e.target.value
        }))
    }
    const handleMobileChange=(e)=>{
        setEmp((prev)=>({
            ...prev,
            mobile:e.target.value
        }))
    }
    const handleEmailChange=(e)=>{
        setEmp((prev)=>({
            ...prev,
            email:e.target.value
        }))
    }
    const createEmp=()=>{
        if(isUpdate){
            fetch(`http://localhost:5000/employee/${tempId}/updateEmployee/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(emp)}).then(function(res){
                console.log("Employee updated Successfully",emp);
                getUsersFromServer();
                setIsUpdate(false);
            })
        }
        else{
            fetch("http://localhost:5000/employee/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(emp)}).then(function(res){
                console.log("Employee created Successfully",emp);
                getUsersFromServer();
            })
        }
        setEmp((prev)=>({
            ...prev,
            id:"",
            name:"",
            age:"",
            mobile:"",
            email:""
        }))
    }
    const updateEmp=(emp)=>{
        setTempId(emp._id);
        setEmp((prev)=>({
            ...prev,
            id:emp.id,
            name:emp.name,
            age:emp.age,
            mobile:emp.mobile,
            email:emp.email
        }))
        setIsUpdate(true);
    }
    const deleteEmp=(emp)=>{
        fetch(`http://localhost:5000/employee/${emp._id}/deleteEmployee/`,{method:"delete"}).then(function(res){
            console.log("Employee deleted Successfully",emp);
            getUsersFromServer();
        })
    }
    return(
        <div>
            <div className="container">
            <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Id"
                        name="id"
                        value={emp.id}
                        onChange={(e) => handleIdChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        name="name"
                        value={emp.name}
                        onChange={(e) => handleNameChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Age"
                        name="age"
                        value={emp.age}
                        onChange={(e) => handleAgeChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile"
                        name="mobile"
                        value={emp.mobile}
                        onChange={(e) => handleMobileChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={emp.email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </div>

                <button onClick={() => { createEmp()}} className="btn btn-success">Create</button>
            </div>

            <table className="table table-primary" style={{"width":"70%","marginLeft":"200px"}}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        emps.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={()=>updateEmp(item)} className="btn btn-primary">Update</button>
                                        <button onClick={()=>deleteEmp(item)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeCrud;