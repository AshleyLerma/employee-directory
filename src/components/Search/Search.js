import React, { Component } from "react";
import "./Search.css";
import { Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Search extends Component {
  render() {
    return (
      <Row className='search'>
        <Form.Control id='searchBar' type='text' placeholder='Search' />
      </Row>
    );
  }
}

export default Search;
