import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

const handleClick = (msg, setStartingScreen, isCurrentReal, setIsCurrentReal, results, setResults) => {

    if (msg == 1){
      console.log('Real');
      if(isCurrentReal){
        setResults({
          'tp': results['tp'] + 1, 
          'tn': results['tn'], 
          'fp': results['fp'], 
          'fn': results['fn']
        })
      }
      else{
        setResults({
          'tp': results['tp'], 
          'tn': results['tn'], 
          'fp': results['fp'] + 1, 
          'fn': results['fn']
        })
      }
    }
    else if (msg == 2){
      console.log('Fake');
      if(isCurrentReal){
        setResults({
          'tp': results['tp'], 
          'tn': results['tn'], 
          'fp': results['fp'], 
          'fn': results['fn'] + 1
        })
      }
      else{
        setResults({
          'tp': results['tp'], 
          'tn': results['tn'] + 1, 
          'fp': results['fp'], 
          'fn': results['fn']
        })
      }
    }
    else{
      setStartingScreen(false)
    }

    setIsCurrentReal(Math.random() < 0.5);
    
  };

function App() {
  const [startingScreen, setStartingScreen] = useState(true);
  const [isCurrentReal, setIsCurrentReal] = useState(false);
  const [results, setResults] = useState({'tp':0, 'tn':0, 'fp':0, 'fn':0})

  return (
    <div className="App">
      {startingScreen &&
      <button onClick={() => handleClick(0, setStartingScreen, isCurrentReal, setIsCurrentReal, results, setResults)}>Start</button>
      }
      {!startingScreen &&
      <div className="Game">
        {isCurrentReal &&
        <body>This is a Real Image </body>
        }
        {!isCurrentReal &&
        <body>This is a Fake Image</body>
        }
        <img src="dataset64/test64/air hockey_1.jpg" alt="First Image" />
        <button onClick={() => handleClick(1, setStartingScreen, isCurrentReal, setIsCurrentReal, results, setResults)}>Real</button>
        <button onClick={() => handleClick(2, setStartingScreen, isCurrentReal, setIsCurrentReal, results, setResults)}>Fake</button>
        <div className='Results'>
          <ul>
            <li>TP: {results.tp}</li>
            <li>FP: {results.fp}</li>
            <li>TN: {results.tn}</li>
            <li>FN: {results.fn}</li>
          </ul>
        </div>

      </div>
      }
      
    </div>
  );
}

export default App;
