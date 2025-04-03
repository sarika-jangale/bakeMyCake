import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterBar from "../FilterBar";

describe("FilterBar Test ", () => {
  test("should render all filter list", () => {
    render(<FilterBar onCategorySelect={jest.fn()} />);
    expect(screen.getByText("ALL")).toBeInTheDocument();
    expect(screen.getByText("CAKES")).toBeInTheDocument();
    expect(screen.getByText("CUP CAKES")).toBeInTheDocument();
  });
  test("should call onCategoryChange when button is clicked", () => {
    const mockFilterChange = jest.fn();
    render(<FilterBar onCategorySelect={mockFilterChange} />);
    fireEvent.click(screen.getByText("CAKES"));
    expect(mockFilterChange).toHaveBeenCalledWith("CAKES");
  });
});
