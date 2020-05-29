import React from 'react'

//Renderiza un cuadro del tablero y decide si debe mostrar algo o no
//Se le debe hacer llegar las coordenadas de la serpiente y de la comida
export class RenderSquare extends React.Component {
    render() {
        let vib = ''
        const i = this.props.i

        if(this.props.food === i) {
          vib = '🔴';
        }

 
        if(this.props.coord.includes(i)) {
          vib = '⚫';
        }

    
        return(
        <div className="square">
            <h1>{vib}</h1>
        </div>
        )
  }
}
