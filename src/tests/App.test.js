import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a div with react router routes", () => {
    const { getByTestId } = render(<App />);
    const div = getByTestId("search-div");
    expect(div).toBeInTheDocument();
  });
});