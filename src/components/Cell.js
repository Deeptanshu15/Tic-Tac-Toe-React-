import React from 'react'

class Cell extends React.Component{
    
    handleClick = () => {
        this.props.handleClick(this.props.x, this.props.y)
    }

    render(){
        
        return(
            <div className="Cell" onClick={this.handleClick}>
                {this.props.board[this.props.y][this.props.x]}
            </div>
        )
    }
}

export default Cell