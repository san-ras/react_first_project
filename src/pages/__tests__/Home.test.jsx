import { render, screen } from "@testing-library/react";
import { Home } from "../Home";

test("Home component renders correctly", () => {
  render(<Home />);

  const bodyElement = screen.getByText("Hey! Welcome to our shop");

  expect(bodyElement).toBeInTheDocument();
});
