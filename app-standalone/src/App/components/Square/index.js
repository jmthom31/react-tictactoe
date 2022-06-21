import React from "react";
import PropTypes from 'prop-types';

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
const Square = ({onClick, value, winningLine, index}) => {

  // if the index of the square equals any one of the winning line indices, set the className to square and square-win
  // else, set the className to square. I have added another CSS block within app.css for square-win to change the text and background colour

    if (index === winningLine[0] || index === winningLine[1] || index === winningLine[2]){
        return <button className="square square-win" onClick={onClick}>{value}</button>;
      }else{
        return <button className="square" onClick={onClick}>{value}</button>;
      }
};

Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    /**
     *  The value to put in the square
     */
    value: PropTypes.string,


    // Adding in checks for the winningLine array and the index number
    winningLine: PropTypes.array,
    index: PropTypes.number

};

export default Square;
