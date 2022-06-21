import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square';

/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */

// adding winningLine as a parameter so that we can use it in the Square component and also passing the index to the Square
const Board = ({onClick, squares, winningLine}) => {
    const renderSquare = (i) => (
        <Square
            winningLine={winningLine}
            value={squares[i]}
            onClick={() => onClick(i)}
            index={i}
        />
    );

    return (
        <div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
        </div>
    )
};

Board.propTypes = {
    /**
     *  The 1..9 array of squares to display
     */
    squares: PropTypes.array,

    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    // Adding in a check for my winningLine array

    winningLine: PropTypes.array
};

export default Board;
