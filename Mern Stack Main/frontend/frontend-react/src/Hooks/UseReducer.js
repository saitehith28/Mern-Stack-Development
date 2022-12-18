import { useReducer } from "react";
function CounterReducer(state,action){
    if(action.type==="increment"){
        return {count:state.count+1}
    }
    else if(action.type==="decrement"){
        return {count:state.count-1}
    }
    else{
        return "No Action";
    }
}
const initialState={
    count:0
}
function UseReducer(){
    const [state,dispatch]=useReducer(CounterReducer,initialState)
    const increment=()=>{
        dispatch({type:"increment"});
    }
    const decrement=()=>{
        dispatch({type:"decrement"});
    }
    return(
        <div>
            <h1>Count : {state.count}</h1>
            <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
            <button className="btn btn-success" onClick={()=>decrement()}>Decrement</button>
        </div>
    )
}

export default UseReducer;
