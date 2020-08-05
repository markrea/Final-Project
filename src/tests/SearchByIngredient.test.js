import React from "react";
import { render } from "@testing-library/react";
import SearchByIngredients from "../components/SearchByIngredients/SearchByIngredients";
import "@testing-library/jest-dom/extend-expect";

describe("SearchByIngredients", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<SearchByIngredients />);
    expect(asFragment).toMatchSnapshot();
  });
  it("displays a search by ingredients div", () => {
    const { getByTestId } = render(<SearchByIngredients />);
    expect(getByTestId("searchByIngredientsDiv")).toBeInTheDocument();
  });
});
