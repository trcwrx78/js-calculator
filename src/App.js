import React from 'react';
import Equal from './components/Equal'
import Clear from './components/Clear'
import Decimal from './components/Decimal'
import Numbers from './components/Numbers'
import useMath from './hooks/useMath'
import './App.css';
import Operands from './components/Operands';


function App() {
  const { Addition, Subtraction, Multiplication, Division } = useMath()
  return (
    <div className="App">
      <h1>JavaScript Calculator</h1>
      <div id="display">
        <p>Values soon</p>
      </div>
      <Clear />
      <Numbers />
      <Decimal />
      <Operands />
      <Equal />
    </div>
  );
}

export default App;
