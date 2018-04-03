import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from './components/Menu';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Primary title</h1>
              <h2 className="subtitle">Primary subtitle</h2>
            </div>
          </div>
        </section>
        <Menu />
        <Body />
      </div>
    );
  }
}

export default App;
