import { render, screen } from "@testing-library/react";
import {
  BrowserRouter as Router,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import UserDetails from "../../pages/UserDetails";

const UserDetailsMock = () => {
  return (
    <Router>
      <Routes>
        <Route path="*/dashboard/users/1" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

describe("User details", async () => {
  it("should render details", async () => {
    render(
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );
    // screen.debug();
    console.log(expect(screen.findByTestId("user-details")));
    await expect(screen.findByTestId("user-details"));
  });
});
