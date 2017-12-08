import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: {value: '', touched: false},
      email: {value: '', touched: false},
      success: false,
    };
  }

  validName(){
    return this.state.name.value.length >= 8;
  }
  
  validEmail(){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(this.state.email.value);
  }

  canBeSubmitted() {
    return this.validName() && this.validEmail();
  }

  onNameChange = (event) => {
    console.log(event);
    this.setState({name: {value: event.target.value, touched: true}});
  }

  onEmailChange = (event) => {
    this.setState({email: {value: event.target.value, touched: true}});
  }

  handleSubmit = (event) => {
    if(!this.canBeSubmitted()){
      event.preventDefault();
      return;
    }
    this.setState({success:true});
  }

  render() {
    let enabled = this.canBeSubmitted();
    return (
    (this.state.success ? (<p>Thank you!</p>) : 
      (<div className="App">
      <h1>Validated Form</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Name" value={this.state.name.value} onChange={this.onNameChange}/>
          {(this.validName() || !this.state.name.touched) ? (<span></span>) : (<span className="error">A name must contain at least 8 characters!</span>)}
        </div>
        <div>
          <input type="text" placeholder="Email" value={this.state.email.value} onChange={this.onEmailChange}/>
          {(this.validEmail() || !this.state.email.touched) ? (<span></span>) : (<span className="error">Please enter a valid email!</span>)}
        </div>
        <button disabled={!enabled}>Submit</button>
      </form>
    </div>))
    );
  }
}

export default App;
