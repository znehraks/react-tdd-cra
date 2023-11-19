import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

describe("react test basic", () => {
  it("renders learn react link", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    const checkbox = screen.getByRole("checkbox", { name: "Test Checkbox" });
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  it("quiz2", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(button).toHaveStyle("background-color: MediumVioletRed");

    const checkbox = screen.getByRole("checkbox", { name: "Test Checkbox" });
    fireEvent.click(checkbox);
    expect(button).toHaveStyle("background-color: MidnightBlue");
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(button).toHaveStyle("background-color: MediumVioletRed");
    expect(button).toBeEnabled();
  });
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

describe("code quiz!", () => {
  test("initial color is MediumVioletRed", () => {});
});
