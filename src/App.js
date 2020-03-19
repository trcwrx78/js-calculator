import React from 'react'
import useMath from './hooks/useMath'
import './App.css';


function App() {
  const { numButtons, opButtons, calculation, handleClick } = useMath()
  
  return (
    <div className="calculator">
      <h1>fcc calculator</h1>
      <div id="display">
        <p>{calculation}</p>
      </div>
      <div className="container">
        <button id = "clear" className="btn btn-clear" onClick={handleClick}>AC</button>
        {numButtons}
        {opButtons}
        <button id="decimal" className="btn" onClick={handleClick}>.</button>
        <button id="equals" className="btn btn-equals" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
