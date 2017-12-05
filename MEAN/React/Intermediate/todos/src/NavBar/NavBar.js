import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props){
    super(props);
  }
// add clear completed button
  render() {
    let clearButton;
    if(this.props.numCompleted > 0){
      clearButton = (<button onClick={this.props.onDelete}>Clear Completed</button>);
    }
    else{
      clearButton = (<div></div>);
    }

    return (
      <div className="navBar">
        <div className="numLeft">{this.props.numLeft} item{this.props.numLeft !== 1 ? "s" : ""} left</div>
        <div className="filterButtons">
            <button className={"" + (this.props.show === "All" ? 'selected' : '')} onClick={this.props.filterAll}>All</button>
            <button className={"" + (this.props.show === "Active" ? 'selected' : '')} onClick={this.props.filterActive}>Active</button>
            <button className={"" + (this.props.show === "Completed" ? 'selected' : '')} onClick={this.props.filterCompleted}>Completed</button>
        </div>
        <div className="clearCompleted">
          {clearButton}
        </div>
      </div>
    );
  }
}

export default NavBar;
