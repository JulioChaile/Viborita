import React from 'react'
import {RenderSquare} from './RenderSquare'

export class RenderTable extends React.Component {
    render() {
        return(
        <div>
        <div className="board-row">
          <RenderSquare food={this.props.food} coord={this.props.coord} i={0} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={1} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={2} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={3} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={4} />
        </div>
        <div className="board-row">
          <RenderSquare food={this.props.food} coord={this.props.coord} i={5} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={6} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={7} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={8} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={9} />
        </div>
        <div className="board-row">
          <RenderSquare food={this.props.food} coord={this.props.coord} i={10} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={11} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={12} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={13} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={14} />
        </div>
        <div className="board-row">
          <RenderSquare food={this.props.food} coord={this.props.coord} i={15} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={16} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={17} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={18} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={19} />
        </div>
        <div className="board-row">
          <RenderSquare food={this.props.food} coord={this.props.coord} i={20} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={21} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={22} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={23} />
          <RenderSquare food={this.props.food} coord={this.props.coord} i={24} />
        </div>
        </div>
        )
    }
}