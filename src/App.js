/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';

// Adding multiple components(parent and child components into this app component.)
import MyFirstComponent from './MyFirstComponent';

function App() {
  return (
    <> 
    {/* Use "<React.Fragment/><React.Fragment/>"" to wrap multiple elements together. 
    Its short form which is "<><>", can also be used */}

    <div className="App">    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
    <br />

    <MyFirstComponent />

    </>
  );
}

export default App;
