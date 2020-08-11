import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import RandomSearch from "../components/RandomRecipe/RandomRecipe";

const mockOnClick = jest.fn();

describe("RandomSearch", () => {
  it("component renders correctly with props", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <RandomSearch />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a div", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <RandomSearch />
      </MemoryRouter>
    );
    expect(getByTestId("buttonDiv")).toBeInTheDocument();
  });
  it("renders a button with text content 'Go!'", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <RandomSearch />
      </MemoryRouter>
    );
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toHaveClass("randomButton");
    expect(getByRole("button")).toHaveTextContent("Go!");
  });
});
