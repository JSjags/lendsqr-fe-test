import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "../../pages/Users";

const UsersMockup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

test("Home", () => {
  it("Home page should have redirecting message", () => {
    render(<UsersMockup />);
    const redirectText = screen.getByText(/Redirecting to User details/i);

    expect(redirectText).toBeInTheDocument();
  });
});
