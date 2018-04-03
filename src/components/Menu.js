import React, { Component } from "react";
import string from "../string.json";

const divStyle = {
  "border-radius": 0
};

class Menu extends Component {
  render() {
    return (
      <div className="columns is-gapless">
        <div className="column">
          <a className="button is-info is-fullwidth" style={divStyle}>{string.menu.place}</a>
        </div>
        <div className="column">
          <a className="button is-success is-fullwidth" style={divStyle}>{string.menu.activity}</a>
        </div>
        <div className="column">
          <a className="button is-warning is-fullwidth" style={divStyle}>{string.menu.shopping}</a>
        </div>
        <div className="column">
          <a className="button is-danger is-fullwidth" style={divStyle}>{string.menu.map}</a>
        </div>
      </div>
    );
  }
}

export default Menu;
