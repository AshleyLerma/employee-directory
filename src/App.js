import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container id='container'>
      <Header />
      <Search />
      <Table />
    </Container>
  );
}

export default App;
