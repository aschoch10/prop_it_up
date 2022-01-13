import React, { Component } from 'react';



class PersonComponent extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            age : this.props.age
        }
    }

    render(){
        let clicker = ()=>{
            console.log("clicked it son!")
            this.setState({age: this.state.age + 1})
        }

        return(
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={clicker}>Increase Age for {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonComponent;