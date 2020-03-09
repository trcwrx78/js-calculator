import React from 'react';
import useMath from './hooks/useMath'
import './App.css';


function App() {
  const { Addition, Subtraction, Multiplication, Division } = useMath()
  return (
    <div className="App">
      <h1>Hello {Addition(10, 5)}</h1>
    </div>
  );
}

export default App;
