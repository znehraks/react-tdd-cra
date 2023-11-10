import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
