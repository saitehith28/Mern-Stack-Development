import { useEffect,useState } from "react";
function UseEffectHook(){
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [post,setPost]=useState({id:"",title:"",userId:"",completed:""})

    async function getPost(){
        let data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let post=await data.json();
        setPost(post);
    }
    useEffect(()=>{
        console.log("Hello I am UseEffect");
        getPost();
    },[name,age])
    const changeName=()=>{
        setName("Tehith");
    }
    const changeAge=()=>{
        setAge(30);
    }
    const handleAge = (e)=>{
        setAge(e.target.value);
    }
    return(
        <div>
            <h1>Demo of UseEffect Hook</h1>
            <h1>{name}</h1>
            <h1>Age : {age}</h1>
            <input type="text" value={age} placeholder="Enter different Age" onChange={(e)=>handleAge(e)}></input>
            <button className="btn btn-primary" onClick={changeName}>Change Name</button>
            {/* <button className="btn btn-primary" onClick={changeAge}>Change Age</button> */}
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.completed ? "true":"false"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UseEffectHook;