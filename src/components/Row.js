import React from 'react'
import Cell from './Cell'

class Row extends React.Component{
    
    render(){
        return(

            <div className="Row">
                <Cell x={0} handleClick={this.props.handleClick} y={this.props.y} board={this.props.board} /> 
                <Cell x={1} handleClick={this.props.handleClick} y={this.props.y} board={this.props.board} /> 
                <Cell x={2} handleClick={this.props.handleClick} y={this.props.y} board={this.props.board} />
            </div>
        )
    }
}

export default Row