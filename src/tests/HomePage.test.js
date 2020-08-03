import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../components/HomePage";
import "@testing-library/jest-dom/extend-expect";

describe("HomePage", () => {
  it("renders component", () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment).toMatchSnapshot();
  });
});
