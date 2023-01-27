import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  it("Navbar is displayed", () => {
    render(
      <BrowserRouter>
        <Navbar navState={false} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  it("Navbar logout button text is logout and not signout", () => {
    render(
      <BrowserRouter>
        <Navbar navState={false} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("navbar")).not.toHaveTextContent("Signout");
  });
});
