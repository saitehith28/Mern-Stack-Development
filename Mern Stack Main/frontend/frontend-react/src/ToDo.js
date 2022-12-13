import React from 'react';
class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:"",
            taskChange:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.ChangeMe=this.ChangeMe.bind(this);
    }
    handleChange(event){
        this.setState({taskChange:event.target.value})
    }
    ChangeMe(){
        this.setState({task:this.state.taskChange})
    }
    render(){
        return(
            <div>
                <h1>Task Name : {this.state.task}</h1>
                <input type="text" value={this.state.taskChange} onChange={this.handleChange}></input>
                <button onClick={this.ChangeMe}>Add</button>
            </div>
        )
    }
}

export default ToDo;