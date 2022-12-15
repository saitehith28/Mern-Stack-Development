import React from 'react';
import ChildData from './ChildData';
class ParentData extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Tehith",
        }
    }
    receivedData(data){
        console.log("Value received from child= ",data);
        this.setState({name:data});
    }
    render(){
        return(
            <div>
                <h1>Hello in Parent my name is {this.state.name}</h1>
                <ChildData receivedData={(data)=>this.receivedData(data)}/>
            </div>
        )
    }
}

export default ParentData;