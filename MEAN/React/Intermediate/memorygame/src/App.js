import React, { Component } from 'react';
import './App.css';
import Tile from './Tile/Tile';
let numToGuess = 4;

class App extends Component {
  state={started: false, finished:false, starting: false, countdown: 3, numGuessed: 0,
    tiles:Array(12).fill().map(function(num){return {inSequence: false, guessed: false, status: "blank"}})};
  constructor(props){
    super(props);
  }

  startGame(){
    console.log("starting game");
    // select random tiles
    let newTiles = Array(12).fill().map(function(num){return {inSequence: false, guessed: false, status: "blank"}});
    for(let i = 0; i < numToGuess; i++){
      let idx = Math.floor(Math.random()*12);
      if(newTiles[idx].inSequence){
        i--;
      }
      else{
        newTiles[idx].inSequence = true;
        newTiles[idx].status = "selected"; //blue
      }
    }
    console.log(newTiles);
    this.setState({started: true, finished: false, starting: true, countdown: 3, tiles:newTiles, numGuessed: 0});
    let interval = setInterval(() => {
      this.setState({started: true, finished: false, starting: true, countdown: this.state.countdown-1, tiles: this.state.tiles, numGuessed: 0});
      if(this.state.countdown === 0){
        for(let i = 0; i < newTiles.length; i++){
          if(newTiles[i].inSequence){
            newTiles[i].status = "blank";
          }
        }
        this.setState({started: true, finished: false, starting: false, countdown: 0, tiles: this.state.tiles, numGuessed: 0});
        clearInterval(interval);
      }
      }, 1000);
  }

  clickHandler(idx){
    // if not started or guessedTiles.length already === correctTiles, do nothing and return
        // if status of tile at idx is not blank, do nothing and return
    if(!this.state.started || this.state.starting || this.state.numGuessed > numToGuess || 
      this.state.tiles[idx].guessed){
      return;
    }
    let newTiles = this.state.tiles;
    // if status of tile at idx is blank, mark it as guessed.
    newTiles[idx].guessed = true;
    newTiles[idx].status = "guessed";
    this.setState({started: true, finished: this.state.finished, starting: false, countdown: this.state.countdown, tiles: newTiles, numGuessed: this.state.numGuessed+1});
    console.log(this.state.numGuessed);
    // set status after all guesses are made
    if(this.state.numGuessed >= numToGuess-1){
      console.log("processing finish...");
      for(let i = 0; i < newTiles.length; i++){
        if(newTiles[i].guessed && newTiles[i].inSequence){
          newTiles[i].status = "truePositive"; // yellow
        }
        else if(newTiles[i].guessed && !newTiles[i].inSequence){
          newTiles[i].status = "falsePositive"; // red
        }
        else if(!newTiles[i].guessed && newTiles[i].inSequence){
          newTiles[i].status = "falseNegative"; // green
        }
      }
      this.setState({started: true, finished: true, starting: false, countdown: this.state.countdown, tiles: newTiles, numGuessed: this.state.numGuessed});
    }
  }

  render() {
    console.log(this.state.tiles);
    let tiles = this.state.tiles.map((tile, idx) => {
      return (<Tile key={idx} status={tile.status} clickHandler={this.clickHandler.bind(this, idx)}/>);
    });
    return (
      <div className="App">
        <h1>Memory Game</h1>
        {tiles}
        {!this.state.started ? (<button onClick={this.startGame.bind(this)}>Start Game</button>) : (<span></span>)}
        {this.state.starting ? (<div>Get ready to memorize cells in {this.state.countdown}</div>) : (<span></span>)}
        {this.state.finished ? (<button onClick={this.startGame.bind(this)}>Play Again</button>) : (<span></span>)}
      </div>
    );
  }
}

export default App;
