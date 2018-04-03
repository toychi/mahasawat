import React, { Component } from "react";
import string from "../string.json";

class Grid extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <article className="tile is-child box">
            <figure class="image is-4by3">
              <a href="/blog">
                <img alt="place" src={require("../img/place.jpg")} />
              </a>
            </figure>
            <p className="subtitle has-text-left">{string.menu.place}</p>
          </article>
          <article className="tile is-child box">
            <figure class="image is-4by3">
              <img alt="place" src={require("../img/activity.jpg")} />
            </figure>
            <p className="subtitle has-text-left">{string.menu.activity}</p>
          </article>
        </div>
        <div className="tile is-vertical is-parent">
          <article className="tile is-child box">
            <figure class="image is-4by3">
              <img alt="place" src={require("../img/product.jpg")} />
            </figure>
            <p className="subtitle has-text-left">{string.menu.shopping}</p>
          </article>
          <article className="tile is-child box">
            <figure class="image is-4by3">
              <img alt="place" src={require("../img/travel.jpg")} />
            </figure>
            <p className="subtitle has-text-left">{string.menu.map}</p>
          </article>
        </div>
      </div>
    );
  }
}

export default Grid;
