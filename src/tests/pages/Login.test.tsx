import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";

const LoginMock = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <Login />
    </BrowserRouter>
  );
};

describe("Login", () => {
  it("Login Page should have Lendsqr logo", () => {
    render(<LoginMock />);
    const LendSqrLogo = screen.getByAltText("lendsqr-logo");

    expect(LendSqrLogo).toBeInTheDocument();
  });
  it("Login Page should have illustration", () => {
    render(<LoginMock />);
    const illustration = screen.getByAltText("login illustration");

    expect(illustration).toBeInTheDocument();
  });
  it("Login Page should have username input field", () => {
    render(<LoginMock />);
    const username = screen.getByTestId("username");

    expect(username).toBeInTheDocument();
  });
  it("Login Page should have password field", () => {
    render(<LoginMock />);
    const password = screen.getByTestId("password");

    expect(password).toBeInTheDocument();
  });
  it("Login Page should have login button", () => {
    render(<LoginMock />);
    const loginBtn = screen.getByTestId("login-btn");

    expect(loginBtn).toBeInTheDocument();
  });
});
