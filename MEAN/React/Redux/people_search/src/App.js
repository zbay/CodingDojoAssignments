import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './Store';
import Main from "./Components/Main";
import Person from "./Components/Person";
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

//const searchAction = {type: 'search'};

// onSearchChange should dispatch an action, that affects a change, that PersonList should subscribe to and reflect

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <Route exact path="/" component={Main}/>
              <Route path="/profile" component={Person}/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
