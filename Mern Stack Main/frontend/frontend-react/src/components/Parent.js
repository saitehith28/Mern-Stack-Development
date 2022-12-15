import React from 'react';
import Child from './Child';
class Parent extends React.Component{
    constructor(){
        console.log("I am in parent Constructor");
        super();
        this.state={
            count:0,
            show:true
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("I am in parent getDerivedStateFromProps");
        return {};
    }
    componentDidMount(){
        console.log("I am in parent componentDidMount");
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    hide(){
        this.setState({show:!this.state.show});
    }
    render(){
        console.log("I am in parent Render");
        return(
            <div>
                <h1>Hello I am in Parent and Count {this.state.count}</h1>
                <button onClick={()=>this.increment()} className='btn btn-success'>Increment</button>
                <button onClick={()=>this.hide()}>Hide Child</button>
                {this.state.show && <Child count={this.state.count}/>}
            </div>
        )
    }
}

export default Parent;