import React, { Component } from 'react';
import './Square.scss'
class Square extends Component {
    
	generateSquareContent = () => {
        const board = this.props.board;
		const editable = !this.props.editable;
		const row = this.props.rowIndex;
		const col = this.props.colIndex;
		const squareValue = this.props.value !== null ? ""   : board[row][col];
        const correct = this.props.correct;
        console.log(board);

		return (
            <>
              <div class = "box">
              <input 
                class = "square"
                //style = {correct}
                type  = "text"
                value = {squareValue}
                disabled = {!editable}
                onChange = {this.handleSquareValueChange}/>
              </div>
			</>
			);
	}

	handleSquareValueChange = (e) => {
		const newSquareValue = e.target.value;
		if(this.isValidInput(newSquareValue)) {
			const row = this.props.rowIndex;
			const col = this.props.colIndex;
			this.props.handleSquareChange(row, col, newSquareValue);			
		}
	}

	isValidInput = (i) => {
		return (i === '' || (i.length === 1 && !isNaN(i)));
	}

	render() {
		return this.generateSquareContent();
	}
}


    
export default Square;