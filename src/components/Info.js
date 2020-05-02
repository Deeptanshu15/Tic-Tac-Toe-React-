import React from 'react'

class Info  extends React.Component{

    
    render(){
        let style = {}
        let style2 = {}
        if(this.props.winner!==''){
            style = {display: "none"}
        }
        else{
            style2 = {display: "none"}
        }
        return(
            <div className="Info">
                <h1>
                    <div style={style} >
                        Your Chance : {this.props.chance}
                        <div className="Replay-Button" onClick={this.props.handleReplay} >Reset Game</div>
                    </div>
                    <div style={style2} >
                        {this.props.winner} Wins !
                        <div className="Replay-Button" onClick={this.props.handleReplay} >Play Again !</div>
                    </div>
                </h1>
                
            </div>
        )
    }
}

export default Info