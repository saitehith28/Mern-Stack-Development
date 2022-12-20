import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const initialState={
    courseName:"",
    instructorName:"",
    startDate:"",
    endDate:"",
    schedule:""
}

function CoursePage() {
    const [course,setCourse]=useState({initialState});
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const createCourse=()=>{
        console.log("Course Date",course);
        dispatch({type:"ADD_COURSE",payload:course});
        navigate("/courselist");
    }
    const handleCourseDataChange=(e)=>{
        setCourse((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <div className="container">
            <h1>Hello I am in Course Page</h1>
            <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input type="text" className="form-control" placeholder="Enter the Course name" name="courseName" value={course.courseName} onChange={(e)=>handleCourseDataChange(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Instructor Name</label>
                <input type="text" className="form-control" placeholder="Enter the Instructor name" name="instructorName" value={course.instructorName} onChange={(e)=>handleCourseDataChange(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input type="text" className="form-control" placeholder="Enter the Start Date" name="startDate" value={course.startDate} onChange={(e)=>handleCourseDataChange(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input type="text" className="form-control" placeholder="Enter the End Date" name="endDate" value={course.endDate} onChange={(e)=>handleCourseDataChange(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Schedule</label>
                <input type="text" className="form-control" placeholder="Enter the Schedule" name="schedule" value={course.schedule} onChange={(e)=>handleCourseDataChange(e)}/>
            </div>
            <button onClick={()=>{createCourse()}} className="btn btn-success">Create Course</button>
        </div>
    )
}

export default CoursePage;