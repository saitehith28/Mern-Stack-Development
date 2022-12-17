import MenuItem from "./PropsDrilling";
import UseContext from "./UseContext";
import UseEffectHook from "./UseEffect";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function AllHook(){
    return(
        <div>
            <h1>Demo of All React Hooks</h1>
            <UseState/>
            <UseEffectHook/>
            {/* <MenuItem/> */}
            {/* <UseContext/> */}
            <UseReducer/>
        </div>
    )
}

export default AllHook;