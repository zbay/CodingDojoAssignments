import React, { Component } from 'react';
import './InputBar.css';

class InputBar extends Component {
  constructor(props){
    super(props);
  }

  submit(event){
    event.preventDefault();
    this.props.onNewTodo(this.taskInput.value);
    this.taskInput.value="";
  }

  render() {
    return (
      <div className="inputBar">
        <button className="down" onClick={this.props.onToggle}>&#9660;</button>
        <form onSubmit={this.submit.bind(this)}>
          <input type="text" placeholder="What needs to be done?" ref={(input) => this.taskInput = input}/>
          <input type="submit" className="hidden" value="New Todo"/>
        </form>
      </div>
    );
  }
}

export default InputBar;
