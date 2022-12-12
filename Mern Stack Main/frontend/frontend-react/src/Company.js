import React from 'react';
class Company extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyAddress:"Hyd",
        }
    }

    render(){
        return(
            <div>
                <h1>Hello from Company Class based component and My company name is {this.props.company} and address is {this.state.companyAddress}</h1>
            </div>
        )
    }
}

export default Company;