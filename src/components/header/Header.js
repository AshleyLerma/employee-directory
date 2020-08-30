import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Row>
        <header className='header'>
          <h2>Employee Directory</h2>
          <h6>
            Click on carrots to filter by heading or use the search box to
            narrow your results.
          </h6>
          <hr />
        </header>
      </Row>
    );
  }
}

export default Header;
