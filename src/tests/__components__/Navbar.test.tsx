import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  it("Navbar is displayed", () => {
    render(<Navbar />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  it("Navbar logout button text is logout and not signout", () => {
    render(<Navbar />);

    expect(screen.getByTestId("navbar")).not.toHaveTextContent("Signout");
  });
});
