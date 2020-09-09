import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/SearchByIngredients/Search";
import "@testing-library/jest-dom/extend-expect";

const props = {
  setSearchResults: jest.fn(),
};

describe("Search", () => {
  it("component renders correctly with props", () => {
    const { asFragment } = render(<Search {...props} />);
    expect(asFragment).toMatchSnapshot();
  });
  it("returns a div with SearchForm component", () => {
    const { getByTestId } = render(<Search {...props} />);
    const div = getByTestId("searchFormDiv");
    expect(div).toHaveClass("searchFormDiv");
    expect(div).toBeInTheDocument();
  });
});
