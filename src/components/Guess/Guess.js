import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

function Guess({ answer, guess }) {

  const { letter, status } = checkGuess(guess, answer);

  return <>
    {range(NUM_OF_GUESSES_ALLOWED - 1).map((num) => (
      <span key={num}
        className={
          typeof guess === null
            ? 'cell'
            : `cell ${status}`}>
        {guess[num]}</span>
    ))}
  </>;
}

export default Guess;
