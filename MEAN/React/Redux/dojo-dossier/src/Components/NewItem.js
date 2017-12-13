import React, { Component } from 'react';
import {connector} from '../Store';

class NewItem extends Component{
    constructor(){
        super();
        this.state = {item: ""};
    }

    setItem = (event) => {
        this.setState({item: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newItem(this.props.id, this.state.item);
        this.setState({item: ""});
    }

    render(){
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Fun fact" value={this.state.item} onChange={this.setItem}/>
            <button>Add Item</button>
        </form>);
    }
}
export default connector(NewItem);