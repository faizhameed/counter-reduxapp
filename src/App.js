import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Counter/>
      </header>
    </div>
  );
}

export default App;
