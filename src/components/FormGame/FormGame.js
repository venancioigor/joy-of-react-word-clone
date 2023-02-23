import React from 'react';

function FormGame() {

  const [userGuess, setUserGuess] = React.useState({ guess: '' });

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(userGuess);
    setUserGuess({ guess: '' })
  }

  function handleOnChange(event) {
    const userGuessUpper = (event.target.value).toUpperCase();
    setUserGuess({ guess: userGuessUpper })
  }

  return <>
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
