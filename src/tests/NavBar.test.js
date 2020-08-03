import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a navBar div", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("navBar")).toBeInTheDocument();
  });
});
