import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
        }
        this.handleClick1=this.handleClick1.bind(this);
    }

    handleClick1(event){
        console.log("Clicked-1",event);
        this.setState({name:"Tehith"})
    }
    handleClick2(event){
        console.log("Clicked-2",event);
        this.setState({name:"Tehith"})
    }
    handleClick3(event){
        console.log("Clicked-3",event);
        this.setState({name:"Tehith"})
    }
    handleClick4 = (event)=>{
        console.log("Clicked-4",event);
        this.setState({name:"Tehith"})
    }
    render(){
        return(
            <div>
                <h1>Hello I am user Component {this.state.name}</h1>
                <button onClick={this.handleClick1}>Click1</button>
                <button onClick={this.handleClick2.bind(this)}>Click2</button>
                <button onClick={(e)=>this.handleClick3(e)}>Click3</button>
                <button onClick={this.handleClick4}>Click4</button>
            </div>
        )
    }
}

export default User;