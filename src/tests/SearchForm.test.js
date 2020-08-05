import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchByIngredients/SearchForm";
import "@testing-library/jest-dom/extend-expect";

const props = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  query: "random",
};

describe("SearchForm", () => {
  it("component renders with correct props", () => {
    const { asFragment } = render(<SearchForm {...props} />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a form", () => {
    const { getByTestId } = render(<SearchForm {...props} />);
    const form = getByTestId("searchForm");
    expect(form).toBeInTheDocument();
  });
  it("renders an input for the form", () => {
    const { getByTestId } = render(<SearchForm {...props} />);
    const input = getByTestId("input-id");
    expect(input).toBeInTheDocument();
  });
  it("renders a button", () => {
    const { getByRole } = render(<SearchForm {...props} />);
    const btn = getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Go");
  });
  it("changes the state when input is changed", () => {
    const { getByTestId } = render(<SearchForm {...props} />);
    const { handleChange } = props;
    const input = getByTestId("input-id");
    fireEvent.change(input, { target: { value: "randomQuery" } });
    expect(handleChange).toHaveBeenCalled();
  });
  it("calls handleSearch on submission of form", () => {
    const { getByTestId } = render(<SearchForm {...props} />);
    const { handleSubmit } = props;
    const form = getByTestId("searchForm");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
