import React from 'react'
import useMath from './hooks/useMath'
import './App.css';


function App() {
  const { numButtons, opButtons, workButtons, numOne } = useMath()
  
  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div id="display">
        <p>{numOne}</p>
      </div>
      {workButtons}
      {numButtons}
      {opButtons}
    </div>
  );
}

export default App;
