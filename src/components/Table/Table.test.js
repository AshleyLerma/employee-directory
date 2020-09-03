// import dependencies
import React from "react";
// import react-testing methods
import { render } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Table component
import Table from "./Table";

describe("Table", () => {
  test("loads and displays table headers", async () => {
    // Arrange
    const { container } = render(<Table />);
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML("Image", "Name", "Phone", "Email", "DOB");
  });
});
