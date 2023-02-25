import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';

function Guess({ arrString }) {

  return <>
    {range(NUM_OF_GUESSES_ALLOWED - 1).map((num) => (
      <span key={num} className='cell'>{arrString[num]}</span>
    ))}
  </>;
}

export default Guess;
