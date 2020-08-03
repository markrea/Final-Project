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
  it("displays a list with Home, search by inredients, recipe, and random recipe", () => {
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
});
