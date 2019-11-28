import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <h1>React testing with Jest and Enzyme</h1>

        <div className='App-controls'>
          <button
            className='App-btn increment'
            onClick={() => setCount(count + 1)}
          >
            Click to increment
          </button>
          <button
            className='App-btn decrement'
            onClick={() => setCount(count - 1)}
          >
            Click to decrement
          </button>
        </div>

        <h2>{count}</h2>
      </header>
    </div>
  );
};

export default App;
