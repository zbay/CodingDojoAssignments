import './Tile.css';
import React, { Component } from 'react';

class Tile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div onClick={this.props.clickHandler}
            className={"tile " + (this.props.status === 'blank' ? 'blank' : '') +
             (this.props.status === 'truePositive' ? 'tp' : '') +
             (this.props.status === 'falsePositive' ? 'fp' : '') +
             (this.props.status === 'falseNegative' ? 'fn': '') +
             (this.props.status === 'selected' ? 'selected': '')}>
        </div>);
    }
}

export default Tile;