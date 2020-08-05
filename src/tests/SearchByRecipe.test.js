import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchByRecipe from "../components/SearchByRecipe/SearchByRecipe";

describe("SearchByRecipe", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<SearchByRecipe />);
    expect(asFragment).toMatchSnapshot();
  });
  it("gives user option to search by recipe", () => {
    const { getByTestId, getByText } = render(<SearchByRecipe />);
    expect(getByTestId("searchRecipeFormDiv")).toBeInTheDocument();
    expect(getByText("Search By Recipe")).toBeInTheDocument();
  });
});
