import React from 'react';

const Square = ({ value, onClick }) => (
  <button
    className={`w-full h-full bg-gray-200 text-center text-2xl font-bold hover:bg-gray-300 ${
      value ? 'disabled cursor-default' : ''
    }`}
    onClick={onClick}
    disabled={value}
  >
    {value}
  </button>
);

export default Square;
