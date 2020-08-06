import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../components/HomePage";
import "@testing-library/jest-dom/extend-expect";

describe("HomePage", () => {
  it("renders component", () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment).toMatchSnapshot();
  });
  it("displays a main div", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("HomePage-div")).toBeInTheDocument();
  });
  it("dipplays a header", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Welcome to the Fridge Tracker App")).toBeInTheDocument();
  });
});
