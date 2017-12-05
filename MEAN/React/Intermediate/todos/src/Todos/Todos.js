import React, { Component } from 'react';
import InputBar from '../InputBar/InputBar.js';
import Todo from '../Todo/Todo.js';
import NavBar from '../NavBar/NavBar.js';

class Todos extends Component {
  state = {todos: [{task: "Pick up sticks", completed: false}, {task: "cook dinnner", completed: false}],
    numCompleted: 0, show: "All"};

  constructor(props){
    super(props);
  }

  newTodo(text){
    let newTodo = {task: text, completed: false};
    this.setState({todos: this.state.todos.concat(newTodo), numCompleted: this.state.numCompleted, show: this.state.show});
  }

  editTask(task, index){
    let todosCopy = this.state.todos.slice();
    todosCopy[index].task = task;
    this.setState({todos: todosCopy, numCompleted: this.state.numCompleted, show: this.state.show});
  }

  toggleCompleted(index){
    let todosCopy = this.state.todos.slice();
    let newStateObj = {};
    if(todosCopy[index].completed){
      newStateObj.numCompleted = this.state.numCompleted-1;
    }
    else{
      newStateObj.numCompleted = this.state.numCompleted+1;
    }
    todosCopy[index].completed = !todosCopy[index].completed;
    newStateObj.todos = todosCopy;
    console.log(newStateObj);
    this.setState(newStateObj); 
  }

  deleteCompleted(){
    let todosCopy = this.state.todos.slice();
    todosCopy = todosCopy.filter((todo) => todo.completed === false);
    this.setState({todos: todosCopy, numCompleted: 0, show: this.state.show});
  }

  toggleAll(){
    let todosCopy = this.state.todos.slice();
    if(this.state.numCompleted === this.state.todos.length){
      for(let i = 0; i < todosCopy.length; i++){
        todosCopy[i].completed = false;
      }
      this.setState({todos: todosCopy, numCompleted: 0, show: this.state.show});
    }
    else{
      for(let i = 0; i < todosCopy.length; i++){
        todosCopy[i].completed = true;
      }
      this.setState({todos: todosCopy, numCompleted: todosCopy.length, show: this.state.show});
    }
  }

  filterAll(){
    this.setState({todos: this.state.todos, numCompleted: this.state.numCompleted, show: "All"});
  }
  filterActive(){
    this.setState({todos: this.state.todos, numCompleted: this.state.numCompleted, show: "Active"});
  }
  filterCompleted(){
    this.setState({todos: this.state.todos, numCompleted: this.state.numCompleted, show: "Completed"});
  }

  render() {
    console.log(this.state.todos);
    let todosList = this.state.todos.map((todo, idx) => {
      return (this.state.show ==="All" || 
        (this.state.show === "Active" && !todo.completed) || 
        (this.state.show === "Completed" && todo.completed) ) 
        ? (<Todo completed={todo.completed} task={todo.task} key={idx} 
            onToggle={this.toggleCompleted.bind(this, idx)} onEdit={this.editTask.bind(this)} index={idx}/>) 
        : (<span key={idx}></span>);
    });

    return (
      <div className="todos">
        <InputBar onNewTodo={this.newTodo.bind(this)} onToggle={this.toggleAll.bind(this)}/>
        {todosList}
        <NavBar filterAll={this.filterAll.bind(this)} filterActive={this.filterActive.bind(this)}
          filterCompleted={this.filterCompleted.bind(this)} onDelete={this.deleteCompleted.bind(this)} 
          numLeft={this.state.todos.length-this.state.numCompleted} show={this.state.show}
          numCompleted={this.state.numCompleted}/>
      </div>
    );
  }
}

export default Todos;