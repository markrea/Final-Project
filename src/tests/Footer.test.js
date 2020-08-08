import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/HomePage";
import "@testing-library/jest-dom/extend-expect";

describe("Footer", () => {
  it("component renders correctly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });
});
