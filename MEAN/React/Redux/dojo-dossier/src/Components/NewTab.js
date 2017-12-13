import React, { Component } from 'react';
import {connector} from '../Store';

class NewTab extends Component{
    constructor(){
        super();
        this.state = {title: ""};
    }

    setTitle = (event) => {
        this.setState({title: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newTab(this.state.title);
        this.setState({title: ""});
    }

    render(){
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.setTitle}/>
            <button>Add New Tab</button>
        </form>);
    }
}
export default connector(NewTab);