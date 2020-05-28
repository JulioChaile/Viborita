import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coord: [],
      key: '',
      food: '',
      score: 0
    }
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
    this.getRandomInt = this.getRandomInt.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleClick() {
    const coord = [12, 11, 10]
    const key = 'right'
    let food

    document.getElementById('game').focus()

    do {
      food = Math.floor(Math.random() * (25 - 0))
    } while (coord.includes(food))

    this.setState({
      coord: coord,
      key: key,
      food: food
    })

    this.timerID = setInterval(
      () => this.tick(),
      1000     
    );
  }


  
  reset() {
    clearInterval(this.timerID)
    
    this.setState({
      coord: [],
      key: '',
      food: '',
      score: 0
    })
  }

  getRandomInt(coord, mov) {
    let random

    do {
      random = Math.floor(Math.random() * (25 - 0))
    } while (coord.includes(random) || random === mov)

    return random;
  }

  renderSquare(i) {
    let vib = ''

    if(this.state.food === i) {
      vib = '🔴';
    }

 
    if(this.state.coord.includes(i)) {
      vib = '⚫';
    }

    
    return(
      <div className="square">
        <h1>{vib}</h1>
      </div>
    )
  }

  tick() {
    let coord = this.state.coord.slice()
    let food = this.state.food
    let mov = coord[0]
    let score = this.state.score

    if((mov + 1) % 5 === 0 && this.state.key === 'right'){
      alert('perdiste wacho')
      this.reset()
      return 
    }

    if(mov % 5 === 0 && this.state.key === 'left'){
      alert('perdiste wacho')
      this.reset()
      return 
    } 

    if(mov -5 < 0 && this.state.key === 'up'){
      alert('perdiste wacho')
      this.reset()
      return 
    }

    if(mov + 5 > 24 && this.state.key === 'down'){
      alert('perdiste wacho')
      this.reset()
      return
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
    
    if(mov !== food){
      coord.pop()
    } else {
      food = this.getRandomInt(coord, mov)
      score += 10
    }

    if(coord.includes(mov)) {
      alert('perdiste wacho')
      this.reset()
      return
    }

    coord.unshift(mov)

    clearInterval(this.timerID)

    this.timerID = setInterval(
      () => this.tick(),
      1000 - score*5     
    );

    this.setState({
      coord: coord,
      food: food,
      score: score
    })
  }

  onKeyDownHandle(event) {
    if(!this.state.coord){return}

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
      <div id='game' onKeyDown={this.onKeyDownHandle} tabIndex="0" >
        <button 
          hidden={this.state.key} 
          onClick={this.handleClick} 
        >
          Start
        </button>
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
        <h1>Score: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;