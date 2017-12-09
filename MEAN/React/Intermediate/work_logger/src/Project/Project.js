import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let numHours = Math.floor(this.props.minutes / 60);
        let numMinutes = this.props.minutes - (numHours * 60);
        return (<div className="project">
            <span>{numHours}</span>:<span>{numMinutes}</span> <span className="description">{this.props.description}</span>
        </div>);
    }
}

export default Project;