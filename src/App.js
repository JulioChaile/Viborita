import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cord: 10,
      key: 'right'
    }
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
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
    if((this.state.cord + 1) % 5 === 0 && this.state.key === 'right'){
      return //alert('perdiste wacho')
    }

    if(this.state.cord % 5 === 0 && this.state.key === 'left'){
      return //alert('perdiste wacho')
    } 

    if(this.state.cord -5 < 0 && this.state.key === 'up'){
      return //alert('perdiste wacho')
    } 

    if(this.state.cord + 5 > 24 && this.state.key === 'down'){
      return //alert('perdiste wacho')
    } 

    if(this.state.key === 'right') {
     this.setState({
       cord: this.state.cord + 1
     });
    }

    if(this.state.key === 'left') {
      this.setState({
        cord: this.state.cord - 1
      });
    }

    if(this.state.key === 'up') {
      this.setState({
        cord: this.state.cord - 5
      });
    }

    if(this.state.key === 'down') {
      this.setState({
        cord: this.state.cord + 5
      });
    }
    
  }

  onKeyDownHandle(event) {
    const key = event.key
    
    if(key === 'ArrowLeft'){
      this.setState({
        key: 'left'
      })
    }

    if(key === 'ArrowUp'){
      this.setState({
        key: 'up'
      })
    }

    if(key === 'ArrowRight'){
      this.setState({
        key: 'right'
      })
    }

    if(key === 'ArrowDown'){
      this.setState({
        key: 'down'
      })
    }
  }

  render() {
    return(
      <div onKeyDown={this.onKeyDownHandle} tabIndex="0" >
        <h1>{this.state.key}</h1>
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
