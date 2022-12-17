import React from "react";
import EmployeeTable from "../EmployeeTable";
class AlternativeEmployeeClass extends React.Component {
    constructor() {
        super();
        this.state = {
            empInfo: {
                name: "",
                age: "",
                salary: "",
                address: ""
            },
            isDisplay:false
        }
    }
    changeName(e){
        this.setState({empInfo:{...this.state.empInfo,name:e.target.value}});
    }
    changeAge(e){
        this.setState({empInfo:{...this.state.empInfo,age:e.target.value}});
        // this.setState({empInfo:{age:e.target.value}});
        // example for using ...
    }
    changeSalary = (e)=>{
        this.setState({empInfo:{...this.state.empInfo,salary:e.target.value}});
    }
    changeAddress = (e)=>{
        this.setState({empInfo:{...this.state.empInfo,address:e.target.value}});
    }
    saveData(e){
        e.preventDefault();
        // this.setState({empInfo:{...this.state.empInfo,name:"",age:"",salary:"",address:""}});
        this.setState({isDisplay:true});
    }
    render() {
        
        return (
            <div>
                <h1>Employee Details using AlternateEmployeeClass</h1>
                <form onSubmit={(e)=>this.saveData(e)}>
                    <label>Name:</label>
                    <input type="text" value={this.state.empInfo.name} onChange={(e)=>this.changeName(e)}></input>
                    <label>Age:</label>
                    <input type="text" value={this.state.empInfo.age} onChange={(e)=>this.changeAge(e)}></input>
                    <label>Salary:</label>
                    <input type="text" value={this.state.empInfo.salary} onChange={(e)=>this.changeSalary(e)}></input>
                    <label>Address:</label>
                    <input type="text" value={this.state.empInfo.address} onChange={(e)=>this.changeAddress(e)}></input>
                    <button className="btn btn-primary">Submit</button>
                </form>
                {this.state.isDisplay && <EmployeeTable empInfo={this.state.empInfo}/>}
            </div>
        )
    }
}

export default AlternativeEmployeeClass;