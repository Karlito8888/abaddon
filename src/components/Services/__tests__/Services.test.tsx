import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "../Services";

describe("Services component", () => {
  it("renders without crashing", () => {
    render(<Services />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("displays all service cards", () => {
    render(<Services />);
    expect(screen.getByText("Termite Control & Treatment")).toBeInTheDocument();
    expect(screen.getByText("Cockroach Control")).toBeInTheDocument();
    expect(screen.getByText("Ants Control")).toBeInTheDocument();
    expect(screen.getByText("Rats & Rodents Control")).toBeInTheDocument();
    expect(screen.getByText("Flying Insects Control")).toBeInTheDocument();
    expect(screen.getByText("Bed Bugs Control")).toBeInTheDocument();
    expect(screen.getByText("Flea & Tick Control")).toBeInTheDocument();
    expect(screen.getByText("Disinfection Services")).toBeInTheDocument();
  });
});
