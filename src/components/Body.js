import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "./Grid.js";
import Blog from "./Blog.js";
import string from "../string.json";

const eightHeight = {
  height: "11%"
};

const fullHeight = {
  height: "100%"
};

class Body extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="columns">
          <Router>
            <div className="column is-two-thirds">
              <Route exact path="/" component={Grid} />
              <Route path="/blog" component={Blog} />
            </div>
          </Router>
          <div className="column">
            <aside className="menu" style={fullHeight}>
              <ul className="menu-list" style={fullHeight}>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.product}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.food}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.activity}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.around}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.history}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.map}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.image}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.document}</a>
                </li>
                <li style={eightHeight}>
                  <a style={fullHeight}>{string.qa}</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
