import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../components/SideBar";
import "@testing-library/jest-dom/extend-expect";

describe("SideBar", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a div", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    expect(getByTestId("SideBar")).toBeInTheDocument();
  });
  it("contains 4 link elements", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const links = getAllByRole("link");
    expect(links).toHaveLength(4);
  });
  it("contains a list of links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    expect(getByText("HomePage")).toBeInTheDocument();
    expect(getByText("Search by recipe")).toBeInTheDocument();
    expect(getByText("Search by ingredients")).toBeInTheDocument();
    expect(getByText("Get random recipe")).toBeInTheDocument();
  });
});
