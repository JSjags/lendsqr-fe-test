import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const DashboardMock = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
      <Dashboard />
    </BrowserRouter>
  );
};

describe("Dashboard", () => {
  it("Dashboard Page should have header", () => {
    render(<DashboardMock />);
    const Header = screen.getByTestId("header");

    expect(Header).toBeInTheDocument();
  });
  it("Dashboard Page should have navbar", () => {
    render(<DashboardMock />);
    const Navbar = screen.getByTestId("navbar");

    expect(Navbar).toBeInTheDocument();
  });
});
