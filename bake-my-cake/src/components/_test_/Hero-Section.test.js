import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

describe("Hero-Section Test Cases", () => {
  test("shold render heading and button", () => {
    render(<HeroSection />);
    const heading = screen.getByText(/Birthday Cake Delivery/);
    expect(heading).toBeInTheDocument();
  });
  test("should render  button", () => {
    render(<HeroSection />);
    const btn = screen.getByRole("button", { name: /Shop Now/ });
    expect(btn).toBeInTheDocument();
  });
});
