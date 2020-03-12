import React from 'react'
import useMath from './hooks/useMath'
import './App.css';


function App() {
  const { numButtons, opButtons, numDisplay } = useMath()
  
  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div id="display">
        <p>{numDisplay}</p>
      </div>
      {numButtons}
      {opButtons}
    </div>
  );
}

export default App;
