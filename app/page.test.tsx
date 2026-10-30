import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the URVA hero headline", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /smarter farming. stronger harvests./i })
    ).toBeInTheDocument();
  });
});
