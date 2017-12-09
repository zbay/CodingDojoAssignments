import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
let baseURL = "https://www.omdbapi.com/?apikey=90b84b95&type=movie&t=";

class App extends Component {
  constructor(){
    super();
    this.state = {query: {value: "", touched: false}, movie: null, apiError: null};
  }

  validQuery(){
    return this.state.query.value.length > 0;
  }

  onQueryChange = (event) => {
    this.setState({query: {value: event.target.value, touched: true}});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.validQuery()){
      return;
    }
    axios.get(baseURL + this.state.query.value)
      .then((response) => {
        console.log(response);
        this.setState({movie: response.data, apiError: null});
      })
      .catch((error) => {
        this.setState({apiError: error.Error, movie: null});
      });
  }

  render() {
    let enabled = this.validQuery();
    return (
      <div className="App">
        <h1>Movie Data</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onQueryChange}/>
          <button disabled={!enabled}>Search</button>
          {enabled || !this.state.query.touched ? (<span></span>) : (<div className="error">&nbsp;Please enter a title to search for!</div>)}
        </form>
        {this.state.apiError ? (<span className="error">{this.state.apiError}</span>) : (<span></span>)}
        {this.state.movie ? (<div>
          <p><span className="bold">Year: </span>{this.state.movie.Year || "N/A"}</p>
          <p><span className="bold">Director: </span>{this.state.movie.Director || "N/A"}</p>
          <p><span className="bold">Plot: </span>{this.state.movie.Plot || "N/A"}</p>
        </div>) : (<span></span>)}
      </div>
    );
  }
}

export default App;
