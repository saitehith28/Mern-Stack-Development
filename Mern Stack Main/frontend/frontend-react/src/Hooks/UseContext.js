import { createContext , useContext } from "react";
const NameContext = createContext();
const name="Hyderabad";

function Home(){
    return(
        <div>
            <h4>Home Component</h4>
            <AboutUs/>
        </div>
    )
}

function AboutUs(){
    const name=useContext(NameContext);
    return(
        <div>
            <h4>AboutUs Component {name}</h4>
            <ContactUs/>
        </div>
    )
}

function ContactUs(){
    const names=useContext(NameContext);
    return(
        <div>ContactUs Component My address is {names}</div>
    )
}

function MenuItem(){
    return(
        <Home/>
    )
}

function UseContext(){
    return(
        <NameContext.Provider value={name}>
            <MenuItem/>
        </NameContext.Provider>
    )
}

export default UseContext;