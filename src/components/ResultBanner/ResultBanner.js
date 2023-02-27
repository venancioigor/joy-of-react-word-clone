import React from 'react';

function WinnerBanner({ guessCounter }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{
          guessCounter > 1
            ? ` ${guessCounter} guesses`
            : '1 guess'}</strong>.
      </p>
    </div>
  )
}

function LostBanner({ answer, guessCounter }) {
  if (guessCounter < 6) {
    return
  }

  return (<div className="sad banner">
    <p>Sorry, the correct answer is <strong>{`${answer}`}</strong>.</p>
  </div>)
}


function ResultBanner({ gameResult, answer, counter }) {
  return <>
    {gameResult === true && <WinnerBanner guessCounter={counter} />}
    {gameResult === false && <LostBanner answer={answer} guessCounter={counter} />}
  </>;
}

export default ResultBanner;
