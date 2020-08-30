import React, { Component } from "react";
import "./Search.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Search extends Component {
  render() {
    return <Form.Control type='text' placeholder='Search' />;
  }
}

export default Search;
