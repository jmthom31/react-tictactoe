import React, { useState } from "react";
import Board from "../Board";

/**
 * A game of tic-tac-toe.
 */

// Creating arrays to store the scores of each game for player X and player O
// I have put these outside of the Game function so that they don't get reset to 0 every time a new game is started
let xArray = [Array(5).fill(null)];
let oArray = [Array(5).fill(null)];
// creating a counter to store the game number which will be used to access the appropriate value in the game score arrays
let gameNumber = 0;

const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null)}]); // Start of game
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (squares) => {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Adding a new function to calculate the indices of the winning line so that they can be highlighted by returning lines[i]

    const calculateWinningLine = (squares) => {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return lines[i];
        }
      }
      return null;
    };

    const handleClick = (i) => {
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        setGameHistory([...history, { squares }]);
        setStepNumber(history.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const current = gameHistory[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = gameHistory.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });


    // Assigning the winning line to a varibale, winningLine, by calling calculateWinningLine.
    // This will be used when the board is rendered.
    // I initiated the winningLine array with nulls so that I didn't get an error when trying
    // to read the values of the array before it was filled when a winner was declared.
    let status;
    let winningLine = [null, null, null];
    if (winner) {
        winningLine = calculateWinningLine(current.squares)
        // Updating the values for the league table depending on who wins the game
        if(winner === "X") {
          xArray[gameNumber] = 1;
          oArray[gameNumber] = "-";
        }else{
          oArray[gameNumber] = 1;
          xArray[gameNumber] = "-";
        }
        status = "Winner: " + winner;
        // Adding a message to notify if there is a draw and adding a dash in the league table for both players
      } else if(!current.squares.includes(null)){
        status = "It's a draw! Try again!";
        xArray[gameNumber] = "-";
        oArray[gameNumber] = "-";
      } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
      }

    // creating a function to play another game when a button is clicked
    const playAgain = () => {
      gameNumber++;
      setGameHistory([{ squares: Array(9).fill(null) }]);
      setStepNumber(0);
      setXisNext(true);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    // Passing in the winningLine that will be used in the Board component
                    winningLine={winningLine}
                    onClick={i => handleClick(i)}
                />
              <div>
                {/* Adding in the 'play again' button */}
                <button className="play-again" onClick={playAgain}>Play Again</button>
              </div>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            {/* Adding a table to display the league table */}
            <div className="league-table">
              <p>League Table</p>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Game 1</td>
                    <td>Game 2</td>
                    <td>Game 3</td>
                    <td>Game 4</td>
                    <td>Game 5</td>
                  </tr>
                  <tr>
                    <td>Player X</td>
                    <td>{xArray[0]}</td>
                    <td>{xArray[1]}</td>
                    <td>{xArray[2]}</td>
                    <td>{xArray[3]}</td>
                    <td>{xArray[4]}</td>
                  </tr>
                  <tr>
                    <td>Player O</td>
                    <td>{oArray[0]}</td>
                    <td>{oArray[1]}</td>
                    <td>{oArray[2]}</td>
                    <td>{oArray[3]}</td>
                    <td>{oArray[4]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default Game;
