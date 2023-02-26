import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "../SignIn";

const SignInWithRouter = () => (
  <MemoryRouter>
    <SignIn />
  </MemoryRouter>
);

describe("<SignIn/>", () => {
  it("Renders all input fields", () => {
    const { container } = render(<SignInWithRouter />);

    const emailInput = container.querySelector("input[type='email']");
    const passwordInput = container.querySelector("input[type='password']");
    const rememberMeCheckbox = container.querySelector(
      "input[type='checkbox']"
    );
    const signInButton = screen.getByTestId("sign-in-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rememberMeCheckbox).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it("Handles user inputs", () => {
    const { container } = render(<SignInWithRouter />);
    const emailInput = container.querySelector("input[type='email']");

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });

    expect(emailInput.value).toBe("test@email.com");
  });
});
