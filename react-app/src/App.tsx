import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopImages from "./TopImages"
import MainImages from "./MainImages"
import Introduction from "./Introduction"


function App() {
  return (
    <div className="App">
      <hr />
      <h1>MATTHEW</h1>
      <hr />
      <header className="App-header">
        <TopImages />
      </header>
      <Introduction />
      <MainImages />
    </div>
  );
}

export default App;
