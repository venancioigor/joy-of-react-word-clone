import React from 'react';

function FormGame() {

  const [userGuess, setUserGuess] = React.useState({ guess: '' })
  const [guessesArr, setGuessesArr] = React.useState([]);


  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(userGuess);

    const nextGuessArray = [...guessesArr, userGuess.guess]
    setGuessesArr(nextGuessArray);

    setUserGuess({ guess: '' })
  }

  function handleOnChange(event) {
    const userGuessUpper = (event.target.value).toUpperCase();
    const nextGuess = { guess: userGuessUpper }
    setUserGuess(nextGuess);
  }

  return <>
    <div className='guess-results'>
      {guessesArr.length > 0 && guessesArr.map((guess, index) =>
        <p key={index} className='guess'>{guess}</p>)
      }
    </div>
    <form onSubmit={handleOnSubmit}
      className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter a guess:</label>
      <input
        minLength={5}
        maxLength={5}
        value={userGuess.guess}
        onChange={handleOnChange}
        id='guess-input' type='text'></input>
    </form>
  </>;
}

export default FormGame;
