import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchByRecipe from "../components/SearchByRecipe/SearchByRecipe";

describe("SearchByRecipe", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<SearchByRecipe />);
    expect(asFragment).toMatchSnapshot();
  });
});
