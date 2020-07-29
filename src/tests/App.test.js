import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders a heading", () => {
    const { getByText } = render(<App />);
    const heading = getByText("Fridge Tracker");
    expect(heading).toBeInTheDocument();
  });
  it("renders a div with search results", () => {
    const { getByTestId } = render(<App />);
    const div = getByTestId("search-div");
    expect(div).toBeInTheDocument();
  });
});

describe("with router", () => {
  it("should load HomePage component", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/']}">
        <App />
      </MemoryRouter>
    );
    expect(component.find(HomePage)).toHaveLength(1)
  });
});
