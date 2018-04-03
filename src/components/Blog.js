import React, { Component } from "react";
import string from "../string.json";

class Blog extends Component {
  render() {
    return (
      <div>
        <figure class="image is-4by3">
          <img alt="place" src={require("../img/place.jpg")} />
        </figure>
        <h3 class="title is-3">Title 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export default Blog;
