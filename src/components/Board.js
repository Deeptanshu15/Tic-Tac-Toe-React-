import React from 'react'
import Row from './Row'
import Info from './Info'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: [
            ['','',''],
            ['','',''],
            ['','','']
            ],
            chance: 'X',
            wining: '',
            
        }
    }

    //Reset Board to initail state
    handleReplay = () => {
        this.setState({
            board : [
            ['','',''],
            ['','',''],
            ['','','']
            ],
            chance: 'X',
            wining: '',
            
        })
    }

    //tic tac toe game winning logic
    checkBoardWIN = (x, y) => {
        
        let win = ''
        let check = this.state.chance
        //console.log(check)
        for(let i=0;i<3;i++){
            if(this.state.board[y][i]!==check){
                win = '';
                break;
            }
            else{
                win = check;
            }
            
        }
        this.setState({wining: win})
        if(win===check)
            return win;
        for(let i=0;i<3;i++){
            if(this.state.board[i][x]!==check){
                win = '';
                break;
            }
            else{
                win = check;
            }
            
        }
        this.setState({wining: win})
        if(win===check)
            return win;
        if(x===y){
            for(let i=0;i<3;i++){
                if(this.state.board[i][i]!==check){
                    win = '';
                    break;
                }
                else{
                    win = check;
                }
                
            }
        }
        this.setState({wining: win})
        if(win===check)
            return win;
        if(x+y===2){
            for(let i=0;i<3;i++){
                if(this.state.board[i][2-i]!==check){
                    win = '';
                    break;
                }
                else{
                    win = check;
                }
                
            }
        }
        this.setState({wining: win})
        return win;
        
    }

    //change state of individual cell after clicking
    handleClick = (x, y) => {
        if(this.state.wining===''){
            let newBoard = []
            newBoard = this.state.board
            newBoard[y][x] = this.state.chance
            //Always use setState to reflect chance in child props (rerender child Component).
            //never mutate state directly.
                this.setState({board: newBoard})
            
            //use setState
            let newChance = ''
            this.state.chance==='X'?newChance = 'O':newChance = 'X';
                this.setState({chance: newChance})

            
            this.checkBoardWIN(x, y);
        }
        
    }

    render(){
        
        return(
            <div>
                
                <div className="Board">
                    <Row board={this.state.board} handleClick={this.handleClick} y={0} />
                    <Row board={this.state.board} handleClick={this.handleClick} y={1} />
                    <Row board={this.state.board} handleClick={this.handleClick} y={2} />
                </div>

                <Info chance={this.state.chance} winner={this.state.wining} handleReplay={this.handleReplay} />
            </div>
        )
    }
}

export default Board