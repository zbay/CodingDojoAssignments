import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
const jwtDecode = require('jwt-decode');
let apiURL = "http://localhost:7654/api/";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>User Dashboard</h1>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/users" component={Users} />
        <Route path="/logout" component={Logout}/>
      </div>
      </Router>
    );
  }
}

function isAuthenticated(){
  let token;
  try{
    token = jwtDecode(localStorage.getItem('token'));
  }
  catch(err){
    token = null;
  }
  console.log(token);
  return token && token.exp > (new Date().getTime() / 1000);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Home extends Component {
  render(){
    return (
      <div>
        <Link to="/login">Login/Registration</Link>
        <h1>Home</h1>
      </div>
    );
  }
}

class Login extends Component {
  constructor(){
    super();
    this.state = {loginName: "", loginPassword: "", registerName: "", registerPassword: "", redirect: false, loginError: null, registerError: null, loginSuccess: null};
  }

  loginNameChange = (event) => {
    this.setState({loginName: event.target.value});
  }
  loginPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value});
  }
  registerNameChange = (event) => {
    this.setState({registerName: event.target.value});
  }
  registerPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value});
  }
  attemptLogin = (event) => {
    let that = this;
    event.preventDefault();
    axios.post(apiURL + "login", {name: this.state.loginName, password: this.state.loginPassword}, {withCredentials: false})
      .then(function(response){
        console.log("success?");
        localStorage.setItem('token', response.data.token);
        that.setState({loginSuccess: true});
      })
      .catch(function(error){
        console.log("error");
        console.log(error);
        that.setState({loginError: "Invalid credentials."});
      });
  }
  attemptRegister = (event) => {
    event.preventDefault();
    let that = this;
    axios.post(apiURL + "register", {name: this.state.registerName, password: this.state.registerPassword}, {withCredentials: false})
      .then(function(response){
        console.log("success?");
        localStorage.setItem('token', response.data.token);
        that.setState({loginSuccess: true});
      })
      .catch(function(error){
        console.log("error");
        console.log(error);
        that.setState({registerError: "Server error. Try again later!"});
      });
  }

  render(){
    return (<div>
      <div>
        <Link to="/">Home</Link>
        <h2>Login</h2>
        <form onSubmit={this.attemptLogin}>
          <label>Name: </label>
          <input type="text" value={this.state.loginName} onChange={this.loginNameChange}/>
          <label>Password: </label>
          <input type="password" value={this.state.loginPassword} onChange={this.loginPasswordChange}/>
          <button disabled={this.state.loginName.length === 0 || this.state.loginPassword.length === 0}>Login</button>
        </form>
        {this.state.loginError ? (<div className="error">{this.state.loginError}</div>) : (<span></span>)}
      </div>
      <hr />
      <div>
        <h2>Register</h2>
        <form onSubmit={this.attemptRegister}>
          <label>Name: </label>
          <input type="text" value={this.state.registerName} onChange={this.registerNameChange}/>
          <label>Password: </label>
          <input type="password" value={this.state.registerPassword} onChange={this.registerPasswordChange}/>
          <button disabled={this.state.registerName.length === 0 || this.state.registerPassword.length === 0}>Register</button>
        </form>
        {this.state.registerError ? (<div className="error">{this.state.registerError}</div>) : (<span></span>)}
      </div>
      {this.state.loginSuccess ? (<Redirect to="/users"/>) : (<span></span>)}
    </div>);
  }
}

class Users extends Component{
  constructor(){
    super();
    this.state = {usernames: []};
  }

  componentDidMount(){
    let that = this;
    axios.get(apiURL + "users", {headers: { "Authorization": localStorage.getItem('token') }})
      .then((response) => {
        that.setState({usernames: response.data.users.map((obj) => { return obj.name})});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
    let usernames = [];
    if(this.state.usernames.length > 0){
      usernames = this.state.usernames.map((name, idx) => {
        return (<div key={idx}>{name}</div>);
      });
    }
    return (<div>
      <Link to="/logout">Sign Out</Link>
      <hr />
      <h2>UserList</h2>
      <div className="users">
        {this.state.usernames.length > 0 ? usernames : (<span></span>)}
      </div>
    </div>);
  }
}

class Logout extends Component{
  constructor(){
    super();
    localStorage.removeItem('token');
  }
  render(){
    return (<Redirect to="/"/>);
  }
}

export default App;
