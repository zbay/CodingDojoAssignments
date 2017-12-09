import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { clearInterval } from 'timers';
let descriptions = {"/javascript": "high level dynamic untyped", "/haskell": "hardocore purely functional language", "/coffeescript": "transpiles to JS"};

class App extends Component {
  constructor(){
    super();
    let path = window.location.pathname;
    this.state = {description: descriptions[path] || "", countdown: 5, coffeescript: false};
  }

  componentDidMount(){
    if(window.location.pathname === "/coffeescript"){
      this.coffeescript();
    }
  }
  
  navigate(path){
    this.setState({description: descriptions[path]});
    window.history.pushState({}, "Languages", path);
    //window.location.pathname = path;
    if(path === "/coffeescript"){
      this.coffeescript();
    }
  }

  coffeescript(){
    this.setState({coffeescript: true, countdown: 5});
    let interval = setInterval(function(){
        if(this.state.countdown === 0){
          this.setState({coffeescript: false});
          this.navigate("/javascript");
          clearInterval(this.interval);
        }
        else{
          this.setState({countdown: this.state.countdown-1});
        }
      }.bind(this), 1000);
  }

  render() {

    return (
      <div className="App">
        <p><a onClick={this.navigate.bind(this, "/javascript")}>JavaScript</a></p>
        <p><a onClick={this.navigate.bind(this, "/haskell")}>Haskell</a></p>
        <p><a onClick={this.navigate.bind(this, "/coffeescript")}>CoffeeScript</a></p>
        <hr />
        {this.state.description}
        {this.state.coffeescript ? (<p>We will redirect back to JavaScript in {this.state.countdown}</p>) : (<span></span>)}
      </div>
    );
  }
}

export default App;
