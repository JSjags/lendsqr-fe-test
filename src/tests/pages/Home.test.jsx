import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

const HomeMockup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

test("Home", () => {
  it("Home page should have redirecting message", () => {
    render(<HomeMockup />);
    const redirectText = screen.getByText(/redirecting to login page/i);

    expect(redirectText).toBeInTheDocument();
  });
});
