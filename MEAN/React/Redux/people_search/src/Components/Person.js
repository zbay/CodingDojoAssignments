import React, { Component } from 'react';
import {connector} from '../Store';
let persons = [{id: 0, name: "Zach", occupation: "WebDev"}, {id: 1, name: "Wach", occupation: "Criminal mastermind"}, {id: 2, name: "Bach", occupation: "Composer"}];

class Person extends Component{
    constructor(){
        super();
    }
    
    render(){
        let person = persons[this.props.userID];
        console.log(this.props.userID);
        return (<div>
                <h1>{person.name}</h1>
                <div>Profession: {person.occupation}</div>
            </div>);
    }
}

export default connector(Person);