import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./component/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button veriant="default">Button</Button>
        <Button veriant="danger">Button</Button>
        <Button veriant="outline">Button</Button>
      </header>
    </div>
  );
}

export default App;
