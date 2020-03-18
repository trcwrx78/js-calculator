import React from 'react'
import useMath from './hooks/useMath'
import './App.css';


function App() {
  const { numButtons, opButtons, currentNum, calculation, operand, handleClick } = useMath()
  
  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div id="display">
        <small>{calculation} {operand}</small>
        <p>{currentNum}</p>
      </div>
      <button className="btn" onClick={handleClick}>AC</button>
      {numButtons}
      {opButtons}
      <button className="btn" onClick={handleClick}>.</button>
    </div>
  );
}

export default App;
