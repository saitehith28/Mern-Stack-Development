import React from 'react';
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({count:this.state.count+1});
    }
    decrement(){
        this.setState({count:this.state.count-1});
    }
    render(){
        console.log("Rendering");
        return(
            <div>
                <h1>Counter Example</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.increment()} className='btn btn-primary'>Increment</button>
                <button onClick={()=>this.decrement()} className='btn btn-danger'>Decrement</button>
            </div>
        )
    }
}

export default Counter;

// If you use setState then react will re render and update the data