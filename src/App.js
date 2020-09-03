import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container id='container'>
      <Header />
      <Table />
    </Container>
  );
}

export default App;
