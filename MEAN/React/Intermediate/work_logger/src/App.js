import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project/Project.js';
let projectEnum = ["Personal", "Work"];

class App extends Component {
  constructor(){
    super();
    this.state = {
      projectType: "Personal",
      description: {value: "", touched: false},
      minutes: {value: 0, touched: false},
      workProjects: [],
      personalProjects: []
    };
  }

  validType(){
    return this.state.projectType === "Personal" || this.state.projectType === "Work";
  }

  validDescription(){
    return this.state.description.value.length > 5;
  }

  validMinutes(){
    return this.state.minutes.value >= 0 && this.state.minutes.value <= 240;
  }

  canBeSubmitted(){
    return this.validType() && this.validDescription() && this.validMinutes();
  }

  onTypeChange = (event) => {
    this.setState({projectType: event.target.value});
  }

  onMinutesChange = (event) => {
    this.setState({minutes: {value: event.target.value, touched: true}});
  }

  onDescriptionChange = (event) => {
    this.setState({description: {value: event.target.value, touched: true}});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.canBeSubmitted()){
      return;
    }
    if(this.state.projectType === "Personal"){
      let newProjects = this.state.personalProjects;
      newProjects.push({type: this.state.projectType, description: this.state.description.value, minutes: this.state.minutes.value});
      this.setState({personalProjects: newProjects, minutes: {value: 0, touched: false}, description: {value: "", touched: false}});
    }
    else{
      let newProjects = this.state.workProjects;
      newProjects.push({type: this.state.projectType, description: this.state.description.value, minutes: this.state.minutes.value});
      this.setState({workProjects: newProjects, minutes: {value: 0, touched: false}, projectType: "Personal", description: {value: "", touched: false}});
    }
  }

  render() {
    let enabled = this.canBeSubmitted();
    let personalProjects = this.state.personalProjects.map((project, idx) => {
      return (<Project key={idx} type={project.type} description={project.description} minutes={project.minutes} />);
    });
    let workProjects = this.state.workProjects.map((project, idx) => {
      return (<Project key={idx} type={project.type} description={project.description} minutes={project.minutes} />);
    });
    let personalTime = 0;
    let workTime = 0;
    if(this.state.personalProjects.length > 0){
      for(let i = 0; i < this.state.personalProjects.length; i++){
        personalTime += parseInt(this.state.personalProjects[i].minutes);
      }
    }
    console.log(personalTime);
    if(this.state.workProjects.length > 0){
      for(let i = 0; i < this.state.workProjects.length; i++){
        workTime += parseInt(this.state.workProjects[i].minutes);
      }
    }

    return (
      <div className="App">
        <h1>Work Logger</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Project</label>
            <select onChange={this.onTypeChange} value={this.state.projectType}>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            {(this.validType()) ? (<span></span>) : (<span className="error">Invalid project type</span>)}
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" value={this.state.description.value} onChange={this.onDescriptionChange}/>
            {(this.validDescription() || !this.state.description.touched) ? (<span></span>) : (<span className="error">A description must be at least 5 characters in length!</span>)}
          </div>
          <div className="form-group">
            <label>Minutes</label>
            <input type="number" value={this.state.minutes.value} onChange={this.onMinutesChange}/>
            {(this.validMinutes() || !this.state.minutes.touched) ? (<span></span>) : (<span className="error">Minutes must be between 0 and 240!</span>)}
          </div>
          <button disabled={!enabled}>Add</button>
        </form>
        <hr />
        <div className="projectGrouping">
          <h2>Personal</h2><span className="sum">{personalTime}</span>
          {personalProjects}
        </div>
        <div className="projectGrouping">
          <h2>Work</h2><span className="sum">{workTime}</span>
          {workProjects}
        </div>
      </div>
    );
  }
}

export default App;
