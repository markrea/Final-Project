import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom/extend-expect";

describe("NavBar", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a navbar div", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("NavBar")).toBeInTheDocument();
  });
});
