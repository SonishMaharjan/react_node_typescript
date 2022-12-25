import React from "react";

import MainWrapper from "./components/MainWrapper";

import { render, screen } from "@jest/globals";

test("renders learn react link", () => {
  render(<MainWrapper />);
  const linkElement = screen.getByText(/Nurse Management/i);
  expect(linkElement).toBeInTheDocument();
});
