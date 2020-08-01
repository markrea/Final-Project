import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import "@testing-library/jest-dom/extend-expect";

const props = {
  searchResults: [],
};

describe("SearchResults", () => {
  xit("component renders with correct props", () => {
    const { asFragment } = render(<SearchResults {...props} />);
    expect(asFragment).toMatchSnapshot();
  });
  xit("returns a search results div", () => {
    const { getByTestId } = render(<SearchResults {...props} />);
    const searchResultsDiv = getByTestId("results-div");
    expect(searchResultsDiv).toBeInTheDocument();
  });
  xit("returns an image for each search result", () => {
    const { getByAltText } = render(<SearchResults {...props} />);
    const img = getByAltText("mockAlt");
    expect(img).toBeInTheDocument(); // not working
  });
});
