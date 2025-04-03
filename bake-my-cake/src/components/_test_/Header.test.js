import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";

describe("Header Components Test", () => {
  test("should render BakeMyCake title", () => {
    render(<Header />);
    const title = screen.getByText(/Bake My Cake/i);
    expect(title).toBeInTheDocument();
  });

  test("should render Celebrate Moments ", () => {
    render(<Header />);
    const subTitle = screen.getByText(/Celebrate Your Moment/);
    expect(subTitle).toBeInTheDocument();
  });
});
