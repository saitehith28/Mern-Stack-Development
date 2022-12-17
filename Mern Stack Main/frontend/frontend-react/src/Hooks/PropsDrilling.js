function Home(props){
    return(
        <div>
            <h4>Home Component</h4>
            <AboutUs address={props.address}/>
        </div>
    )
}

function AboutUs(props){
    return(
        <div>
            <h4>AboutUs Component</h4>
            <ContactUs address={props.address}/>
        </div>
    )
}

function ContactUs(props){
    return(
        <div>ContactUs Component My address is {props.address}</div>
    )
}

function MenuItem(){
    return(
        <Home address="Hyd"/>
    )
}

export default MenuItem;