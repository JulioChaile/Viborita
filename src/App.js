import React from 'react';
import './App.css';



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coord: [12, 11, 10],
      key: 'right'
    }
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
  }

  renderSquare(i) {
    let vib = ''

    for(let j = 0; j < this.state.coord.length; j++){
      if(this.state.coord[j] === i) {
        vib = '⚫';
      }
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
    let coord = this.state.coord.slice()
    let mov = coord[0]

    coord.pop()

    if((mov + 1) % 5 === 0 && this.state.key === 'right'){
      return //alert('perdiste wacho')
    }

    if(mov % 5 === 0 && this.state.key === 'left'){
      return //alert('perdiste wacho')
    } 

    if(mov -5 < 0 && this.state.key === 'up'){
      return //alert('perdiste wacho')
    } 

    if(mov + 5 > 24 && this.state.key === 'down'){
      return //alert('perdiste wacho')
    } 

    if(this.state.key === 'right') {
      mov += 1
    }

    if(this.state.key === 'left') {
      mov -= 1
    }

    if(this.state.key === 'up') {
      mov -= 5
    }

    if(this.state.key === 'down') {
      mov += 5
    }

    coord.unshift(mov)

    this.setState({
      coord: coord
    })
    
  }

  onKeyDownHandle(event) {
    const key = event.key
    
    if(key === 'ArrowLeft' && this.state.key !== 'right'){
      this.setState({
        key: 'left'
      })
    }

    if(key === 'ArrowUp' && this.state.key !== 'down'){
      this.setState({
        key: 'up'
      })
    }

    if(key === 'ArrowRight' && this.state.key !== 'left'){
      this.setState({
        key: 'right'
      })
    }

    if(key === 'ArrowDown' && this.state.key !== 'up'){
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
