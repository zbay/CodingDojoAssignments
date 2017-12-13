import React, { Component } from 'react';
import {connector} from '../Store';

class Search extends Component {
    constructor(){
        super();
      }

      onSearchChange = (event) => {
        //console.log(event.target.value);
        this.props.setSearchTerm(event.target.value);
      }

      render(){
        return (<div>
            <input type="text" value={this.props.searchTerm} onChange={this.onSearchChange}/>
        </div>)
      }
}

export default connector(Search);