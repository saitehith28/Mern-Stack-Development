import React from "react";
import EmployeeTable from "../EmployeeTable";
class EmployeeClass extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            salary: "",
            address: "",
            empInfo: {
                name: "",
                age: "",
                salary: "",
                address: ""
            }
        }
    }
    changeName(e){
        this.setState({name:e.target.value});
    }
    changeAge(e){
        this.setState({age:e.target.value});
    }
    changeSalary = (e)=>{
        this.setState({salary:e.target.value});
    }
    changeAddress = (e)=>{
        this.setState({address:e.target.value});
    }
    saveData(e){
        e.preventDefault();
        this.setState({empInfo:{...this.state.empInfo,name:this.state.name,age:this.state.age,salary:this.state.salary,address:this.state.address}});
        this.setState({name:"",age:"",salary:"",address:""});
    }
    render() {
        
        return (
            <div>
                <h1>Employee Details using Class</h1>
                <form onSubmit={(e)=>this.saveData(e)}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={(e)=>this.changeName(e)}></input>
                    <label>Age:</label>
                    <input type="text" value={this.state.age} onChange={(e)=>this.changeAge(e)}></input>
                    <label>Salary:</label>
                    <input type="text" value={this.state.salary} onChange={(e)=>this.changeSalary(e)}></input>
                    <label>Address:</label>
                    <input type="text" value={this.state.address} onChange={(e)=>this.changeAddress(e)}></input>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <EmployeeTable empInfo={this.state.empInfo}/>
            </div>
        )
    }
}

export default EmployeeClass;