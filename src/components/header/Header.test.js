// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Header component
import Header from "./Header";

describe("Header", () => {
  test("loads and displays header", async () => {
    // Arrange
    const { container, asFragment, debug } = render(<Header />);
    debug();
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML(
      `<h1>Employee Directory</h1><h3>Click on carrots to filter by heading or use the search box to narrow your results.</h3>`
    );
  });
});
