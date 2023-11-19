import { render, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

it("Initial Conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", {
    name: "My Button",
  });
  expect(button).toBeDisabled();
});

it("Check enabled", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  await user.click(checkbox);
  expect(checkbox).toBeChecked();

  const button = screen.getByRole("button", {
    name: "My Button",
  });
  expect(button).toBeEnabled();

  await user.click(checkbox);
  expect(button).toBeDisabled();
});
it("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appear
  const hoverMe = screen.getByText(/hover me/i);
  await user.hover(hoverMe);
  const popover = screen.getByText(/no icecream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappear

  await user.unhover(hoverMe);
  expect(popover).not.toBeInTheDocument();
});
