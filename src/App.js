import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cord: 10
    }
  }

  renderSquare(i) {
    let vib = ''

    if(this.state.cord === i) {
      vib = '⚫';
    }
    return(
      <div className="square">
        <h1>{vib}</h1>
      </div>
    )
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let cord
    
    if(this.state.cord + 1 === 15){
      return alert('perdiste wacho')
    } else{
     this.setState({
       cord: this.state.cord + 1
     });
    }
  }

  render() {
    return(
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
  }
}

export default Game;
