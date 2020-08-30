import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h2>Employee Directory</h2>
        <h6>
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </h6>
        <hr />
      </header>
    );
  }
}

export default Header;
