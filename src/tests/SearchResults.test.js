import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchByIngredients/SearchResults";
import "@testing-library/jest-dom/extend-expect";

const props = {
  searchResults: [],
};

describe("SearchResults", () => {
  it("component renders with correct props", () => {
    const { asFragment } = render(<SearchResults {...props} />);
    expect(asFragment).toMatchSnapshot();
  });
  it("returns a search results div", () => {
    const { getByTestId } = render(<SearchResults {...props} />);
    const searchResultsDiv = getByTestId("results-div");
    expect(searchResultsDiv).toBeInTheDocument();
  });
});
