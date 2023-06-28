import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Fibonacci calculator</h2>
          <div className="App-navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </header>
        <div className="App-body">
          <Route exact path="/" component={Fib} />
          <Route path="/about" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
