import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";
import SearchResults from "../components/SearchResults";


describe("App", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a heading", () => {
    const { getByText } = render(<App />);
    const heading = getByText("Fridge Tracker");
    expect(heading).toBeInTheDocument();
  });
  it("renders a div with search results", () => {
    const { getByTestId } = render(<App />);
    const div = getByTestId("search-div");
    expect(div).toBeInTheDocument();
  });
});
