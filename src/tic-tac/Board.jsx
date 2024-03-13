import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => (
  <div className="grid grid-cols-3 gap-4">
    {squares.map((square, index) => (
      <Square value={square} key={index} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
