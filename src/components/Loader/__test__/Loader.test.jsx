import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

describe("<Loader/>", () => {
  it("Should be visible, when isLoading = true", () => {
    render(<Loader isLoading />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument;
  });
});
