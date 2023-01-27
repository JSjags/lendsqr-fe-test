import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";

const HeaderMock = () => {
  return (
    <BrowserRouter>
      <DashboardHeader />
    </BrowserRouter>
  );
};

describe("Dashboard Header", () => {
  it("Dashboard header is displayed", () => {
    render(<HeaderMock />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("Dashboard header contains lendsqr logo", () => {
    render(<HeaderMock />);

    expect(screen.getByAltText("lendsqr-logo")).toBeInTheDocument();
  });
  it("Dashboard header contains search box", () => {
    render(<HeaderMock />);

    expect(screen.getByTestId("search-box")).toBeInTheDocument();
  });
  it("Dashboard header contains avatar image", () => {
    render(<HeaderMock />);

    expect(screen.getByAltText("avatar-image")).toBeInTheDocument();
  });
});
