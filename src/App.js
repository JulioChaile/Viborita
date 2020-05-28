import React from 'react';
import './App.css';
import {RenderTable} from './components/RenderTable.js'
import {getRandomInt, movVibo, dirVibo} from './components/functions.js'

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

  tick() {
    let coord = this.state.coord.slice()
    let food = this.state.food
    let mov = coord[0]
    let score = this.state.score

    if(
      (mov + 1) % 5 === 0 && this.state.key === 'right' ||
      mov % 5 === 0 && this.state.key === 'left' ||
      mov -5 < 0 && this.state.key === 'up' ||
      mov + 5 > 24 && this.state.key === 'down'
    ){
      alert('perdiste wacho')
      this.reset()
      return 
    }

    mov = movVibo(this.state.key, mov)
    
    if(mov !== food){
      coord.pop()
    } else {
      food = getRandomInt(coord, mov)
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
    
    let dir = dirVibo(key, this.state.key)

    this.setState({
      key: dir
    })
  }

  render() {
    return(
      <div 
        id='game' 
        onKeyDown={this.onKeyDownHandle} 
        tabIndex="0" 
      >
        <button 
          hidden={this.state.key} 
          onClick={this.handleClick} 
        >
          Start
        </button>
        <RenderTable 
          coord={this.state.coord} 
          food={this.state.food} 
        />
        <h1>
          Score: {this.state.score}
        </h1>
      </div>
    );
  }
}

export default Game;