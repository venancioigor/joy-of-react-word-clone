import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import ResultBanner from '../ResultBanner/ResultBanner';

function FormGame({ answer }) {

  const [userGuess, setUserGuess] = React.useState({ guess: '' })
  const [guessesArr, setGuessesArr] = React.useState([]);
  const [countUserGuess, setCountUserGuess] = React.useState(0);
  const [result, setResult] = React.useState(false);

  function handleOnChange(event) {
    const userGuessUpper = (event.target.value).toUpperCase();
    const nextGuess = { guess: userGuessUpper }
    setUserGuess(nextGuess);
  }

  function verifyResult(guess, answer) {
    return guess === answer;
  }


  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(userGuess);

    setCountUserGuess(countUserGuess + 1);
    setResult(verifyResult(userGuess.guess, answer));

    const nextGuessArray = [...guessesArr, userGuess.guess]
    setGuessesArr(nextGuessArray);
    setUserGuess({ guess: '' })
  }

  return <>
    <div className='guess-results'>
      {
        range(NUM_OF_GUESSES_ALLOWED).map(num =>
        (<p key={num} className='guess'>
          <Guess answer={answer} guess={
            typeof guessesArr[num] === 'undefined'
              ? ''
              : guessesArr[num]
          } />
        </p>)
        )
      }
    </div>
    <form onSubmit={handleOnSubmit}
      className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter a guess:</label>
      {result && <ResultBanner answer={answer} gameResult={result} counter={countUserGuess} />}
      {result === false && <ResultBanner answer={answer} gameResult={result} counter={countUserGuess} />}
      <input
        disabled={result}
        minLength={5}
        maxLength={5}
        value={userGuess.guess}
        onChange={handleOnChange}
        id='guess-input' type='text'></input>
    </form>
  </>;
}

export default FormGame;
