import React, { Component } from 'react';
import Todos from './Todos/Todos.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
