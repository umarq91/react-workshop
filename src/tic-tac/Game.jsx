import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
import History from './History'
import Reset from "./Reset";
import { gameStyle } from "../Styles";
import Header from "./Header";



const initialState = Array(9).fill(null);
const Game = () => {
  const [history, setHistory] = useState([initialState]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const resetGame = () => {
    setHistory([initialState]);
    setStepNumber(0);
    setXIsNext(true);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };
  const props = {
    winner,
    next: xIsNext,
    history,
    jump: jumpTo,
  }

  return (
    <div style={gameStyle}>
      <Header/>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <History properties={props}/>
      <Reset reset={resetGame}/>
    </div>
  );
};
export default Game;