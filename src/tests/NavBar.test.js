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
