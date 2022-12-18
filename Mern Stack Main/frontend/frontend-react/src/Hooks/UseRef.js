import { useRef,useEffect } from "react";
function UseRef(){
    const inputRef=useRef("");
    useEffect(()=>{
        inputRef.current.focus();
    })
    const submit = (e)=>{
        console.log("Ref Value==",inputRef.current.value)
    }
    return(
        <div>
            <h1>Demo of UseRef hook</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default UseRef;