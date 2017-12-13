import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './Store';
import NewTab from './Components/NewTab';
import Tabs from './Components/Tabs';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Dojo Dossier</h1>
          <NewTab/>
          <Tabs/>
        </div>
      </Provider>
    );
  }
}

export default App;
