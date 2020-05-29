//Genera y devuelve un numero aleatorio entre el 0 y 24(incluido)
//exceptuando cualquiera que pertenezca a las coordenadas de la serpiente
//Se le debe enviar las coordenadas de la serpiente y el cuadro al cual se movera
//Esta funcion se usa para asignar una coordenada a la comida
export function getRandomInt(coord, mov) {
    let random
  
    do {
      random = Math.floor(Math.random() * (25 - 0))
    } while (coord.includes(random) || random === mov)
  
    return random;
  }  

//Asigna el movimiento a la serpiente, se le debe enviar la direccion en la que va y
//la coordenada [0]
//Retorna la nueva ubicacion de la coordenad [0]
export function movVibo(key, mov) {
  switch(key) {
    case 'right':
      mov += 1
      break
  
    case 'left':
      mov -= 1
      break
  
    case 'up':
      mov -= 5
      break
  
    case 'down':
      mov += 5
      break
  }
  console.log({key})

    return mov
}

//Modifica la direccion de la serpiente, se le debe enviar la tecla que fue pulsada y
//la direccion en la que va
//Retorna la nueva direccion de la serpiente
export function dirVibo(key, dir) {
  

  switch(true) {
    case key === 'ArrowLeft' && dir !== 'right':
      dir = 'left'
    break
  
    case key === 'ArrowUp' && dir !== 'down':
      dir = 'up'
    break
  
    case key === 'ArrowRight' && dir !== 'left':
      dir= 'right'
    break
  
    case key === 'ArrowDown' && dir !== 'up':
      dir = 'down'
    break
  }
  
    return dir
  }