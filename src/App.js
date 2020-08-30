import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}

export default App;
