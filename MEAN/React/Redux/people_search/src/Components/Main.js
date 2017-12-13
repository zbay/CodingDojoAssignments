import React, { Component } from 'react';
import Search from "./Search";
import PersonList from './PersonList';

class Main extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
              <Search />
              <PersonList/>
            </div>
        );
      }
}

export default Main;