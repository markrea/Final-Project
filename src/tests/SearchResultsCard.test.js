import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchResultsCard from "../components/SearchResultsCard";
import "@testing-library/jest-dom/extend-expect";

describe("SearchResultsCard", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<SearchResultsCard />);
    expect(asFragment).toMatchSnapshot();
  });
});
