import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Employee Directory</h1>
        <h3>
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </h3>
      </div>
    );
  }
}

export default Header;
