import React, { Component } from 'react';
import {connector} from '../Store';
import {Link} from 'react-router-dom';
let persons = [{id: 0, name: "Zach", occupation: "WebDev"}, {id: 1, name: "Wach", occupation: "Criminal mastermind"}, {id: 2, name: "Bach", occupation: "Composer"}];

class PersonList extends Component {
    constructor(){
        super();
    }

    onSelect(idx){
        this.props.setUserID(idx);
    }

    render(){
        let usernames = persons.filter((person) => { 
                return person.name.indexOf(this.props.searchTerm) > -1})
            .map((person, idx) => {
                return (<p key={idx}><Link to="/profile" onClick={this.onSelect.bind(this, person.id)}>{person.name}</Link></p>)
            });
        return(<div>
                {usernames}
            </div>);
    }
}


export default connector(PersonList);