// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Header component
import Search from "./Search";

describe("Search", () => {
  test("loads and displays search bar", async () => {
    // Arrange
    const { container, asFragment, debug } = render(<Search />);
    debug();
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML();
  });
});
