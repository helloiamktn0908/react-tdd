import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState<string>('')
  function changeText (e: any) {
    setText(e.target.value)
  }

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
      </header>
      <body>
        <input type="text" value={text} onChange={changeText}/>
        <button type="button" disabled={text === ""}/>
      </body>
    </div>
  );
}

export default App;
