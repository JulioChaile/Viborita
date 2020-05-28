import React from 'react'
import { render } from '@testing-library/react'

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
