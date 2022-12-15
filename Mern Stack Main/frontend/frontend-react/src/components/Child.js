import React from 'react';
class Child extends React.Component{
    constructor(props){
        console.log("I am in child Constructor");
        super(props);
        this.state={
            
        }
    }
    static getDerivedStateFromProps(props){
        console.log("I am in child getDerivedStateFromProps");
        console.log(props);
        return {};
    }
    shouldComponentUpdate(){
        console.log("I am in child shouldComponentUpdate");
        return true;
     }
    componentDidMount(){
        console.log("I am in child componentDidMount");
    }
    getSnapshotBeforeUpdate(props,state){
        console.log("I am in child getSnapshotBeforeUpdate");
        console.log(props,state);
        return props;
    }
    componentDidUpdate(props){
        console.log("I am in child componentDidUpdate");
        console.log("",this.props);
    }
    componentWillUnmount(){
        prompt("Your form is unsaved please complete it");
        console.log("I am child unmounting");
    }
    render(){
        console.log("I am in child Render");
        return(
            <div>
                <h1>Hello I am in Child and Count {this.props.count}</h1>
            </div>
        )
    }
}

export default Child;