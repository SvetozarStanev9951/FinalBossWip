import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SignIn from "../SignIn";

describe("<SignIn/>", () => {
  it("Renders all input fields", () => {
    // Arrange
    const { container } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    const emailInput = container.querySelector("input[type='email']");
    const passwordInput = container.querySelector("input[type='password']");
    // Act
    // ----------

    // Assert
    expect(emailInput).toBeInTheDocument;
    expect(passwordInput).toBeInTheDocument;
  });
});
