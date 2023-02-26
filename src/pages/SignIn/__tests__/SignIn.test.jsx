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
    const passwordInput = container.querySelector("input[type='password']");
    const rememberMeCheckbox = container.querySelector(
      "input[type='checkbox']"
    );

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(rememberMeCheckbox, { target: { checked: true } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    expect(emailInput.value).toBe("test@email.com");
    expect(rememberMeCheckbox).toBeChecked();
    expect(screen.getByDisplayValue("testPassword")).toBeInTheDocument();
  });

  it("Handles sign in flow", () => {
    const { container } = render(<SignInWithRouter />);
    const emailInput = container.querySelector("input[type='email']");
    const passwordInput = container.querySelector("input[type='password']");
    const rememberMeCheckbox = container.querySelector(
      "input[type='checkbox']"
    );
    const signInButton = screen.getByTestId("sign-in-button");
    const emailHelperText = screen.getByText("Type in your email");

    fireEvent.click(signInButton);
    expect(emailHelperText.textContent).toBe("Email is required");

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.click(signInButton);
    expect(emailHelperText.textContent).toBe("Type in your email");
  });
});
