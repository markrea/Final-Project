import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
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
    expect(div).toHaveClassName("searchFormDiv");
    expect(div).toBeInTheDocument();
  });
});
