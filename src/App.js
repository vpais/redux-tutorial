import React from "react";
import logo from "./logo.svg";
import { Stringer } from "./features/counter/Stringer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stringer />
      </header>
    </div>
  );
}

export default App;
