import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders weather app text", () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
