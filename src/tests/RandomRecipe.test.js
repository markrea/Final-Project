import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import RandomRecipe from "../components/RandomRecipe/RandomRecipe";

describe("RandomRecipe", () => {
  it("components renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <RandomRecipe />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("returns a SearchByIngredients div", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <RandomRecipe />
      </MemoryRouter>
    );
    expect(getByTestId("SearchByIngredients")).toBeInTheDocument();
    expect(getByTestId("SearchByIngredients")).toHaveClass(
      "SearchByIngredients"
    );
  });
  it("renders a title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <RandomRecipe />
      </MemoryRouter>
    );
    expect(getByText("Random Recipe")).toBeInTheDocument();
  });
});
