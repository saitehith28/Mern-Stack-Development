import { useState } from "react";
import { useNavigate } from "react-router-dom";
function StudentPage() {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleNameChange =(e)=>{
        setName(e.target.value);
    }
    const handleAgeChange =(e)=>{
        setAge(e.target.value);
    }
    const submit = (e) => {
        let student={
            name:name,
            age:age
        }
        localStorage.setItem("student",JSON.stringify(student));
        navigate("/studentlist");
    }
    return (
        <div>
            <h1>Hello I am in Student Page</h1>
            <div className="container">
                <div className="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={handleNameChange}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Age</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Age" value={age} onChange={(e)=>handleAgeChange(e)}/>
                </div>
                <button className="btn btn-success" onClick={submit}>Save</button>
            </div>
        </div>
    )
}

export default StudentPage;