import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a header", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Fridge Tracker")).toBeInTheDocument();
  });
  it("renders a navBar div", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByTestId("navBar")).toBeInTheDocument();
  });
  it("displays a logo", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });
  it("displays a list with Home, search by ingredients, recipe, and random recipe", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Home")).toHaveClass("menu-item");
    expect(getByText("Search by ingredients")).toHaveClass("menu-item");
    expect(getByText("Search by recipe")).toHaveClass("menu-item");
    expect(getByText("Get random recipe")).toHaveClass("menu-item");
  });
  it("contains 4 link elements", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const links = getAllByRole("link");
    expect(links).toHaveLength(4);
  });
  it("should navigate to HomePage with /", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });
  it("should navigate to SearchByIngredients page with /search-by-ingredients", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Search by ingredients").closest("a")).toHaveAttribute(
      "href",
      "/search-by-ingredients"
    );
  });
  it("should navigate to SearchByRecipe page with /search-by-ingredients", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Search by recipe").closest("a")).toHaveAttribute(
      "href",
      "/search-by-recipe"
    );
  });
  it("should navigate to RandomRecipe page with /get-random-recipe", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Get random recipe").closest("a")).toHaveAttribute(
      "href",
      "/get-random-recipe"
    );
  });
});
