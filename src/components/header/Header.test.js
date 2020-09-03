// import dependencies
import React from "react";
// import react-testing methods
import { render } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Header component
import Header from "./Header";

describe("Header", () => {
  test("loads and displays header", async () => {
    // Arrange
    const { container, debug } = render(<Header />);
    debug();
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML(
      `<h2>Employee Directory</h2><h6>Click on headers to sort or use the search box to narrow your results.</h6>`
    );
  });
});
