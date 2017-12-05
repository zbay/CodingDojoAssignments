import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  state = {editing: false, task: this.props.task};
  constructor(props){
    super(props);
  }

  toggleEditing(){
    this.setState({editing:!this.state.editing, task: this.state.task});
  }

  submitEdit(event){
    event.preventDefault();
    this.props.onEdit(this.taskInput.value, this.props.index);
    this.toggleEditing();
  }

  unfocus(){
    if(this.state.editing){
      this.props.onEdit(this.state.task, this.props.index);
      this.toggleEditing();
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state.editing);
    return (
      (this.state.editing ? (<div className="todo">
        <form onSubmit={this.submitEdit.bind(this)}>
          <input type="text" defaultValue={this.props.task} onBlur={this.unfocus.bind(this)} ref={(input) => this.taskInput=input}/>
          <input type="submit" value="Save Changes" className="hidden"/>
        </form>
      </div>) : (<div className="todo" onDoubleClick={this.toggleEditing.bind(this)}>
      <div className={"checkCircle " + (this.props.completed ? 'show' : 'hide')} onClick={this.props.onToggle}>
        &#10004;
      </div>
      <div>
        {this.props.task}
      </div>
    </div>))
    );
  }
}

export default Todo;
