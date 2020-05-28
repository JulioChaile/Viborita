export function getRandomInt(coord, mov) {
    let random
  
    do {
      random = Math.floor(Math.random() * (25 - 0))
    } while (coord.includes(random) || random === mov)
  
    return random;
  }  

export function movVibo(key, mov) {
    if(key === 'right') {
      mov += 1
    }
  
    if(key === 'left') {
      mov -= 1
    }
  
    if(key === 'up') {
      mov -= 5
    }
  
    if(key === 'down') {
      mov += 5
    }
  
    return mov
  }
  
export function dirVibo(key, dir) {
    if(key === 'ArrowLeft' && dir !== 'right'){
      key= 'left'
    }
  
    if(key === 'ArrowUp' && dir !== 'down'){
      key= 'up'
    }
  
    if(key === 'ArrowRight' && dir !== 'left'){
      key= 'right'
    }
  
    if(key === 'ArrowDown' && dir !== 'up'){
      key= 'down'
    }
  
    return key
  }