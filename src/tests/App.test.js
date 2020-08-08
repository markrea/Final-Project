import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

describe("App", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a div with react router routes", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const div = getByTestId("App-div");
    expect(div).toBeInTheDocument();
  });
});
