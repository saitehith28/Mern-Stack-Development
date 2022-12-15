import React from 'react';
class ChildData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Taduka Tehith",
            age:20
        }
    }
    onNameChange(e){
        console.log(e.target.value);
        this.setState({name:e.target.value});
    }
    Save(){
        console.log("Value after save is ",this.state.name);
        this.props.receivedData(this.state.name);
    }
    render(){
        return(
            <div>
                <h1>Hello in Child and age is {this.state.age}</h1>
                <input type="text" value={this.state.name} onChange={(e)=>this.onNameChange(e)}></input>
                <button onClick={()=>this.Save()}>Save</button>
            </div>
        )
    }
}

export default ChildData;