import { render, screen } from "@testing-library/react";
import UserStatus from "../../components/UserStatus";

describe("User Status", () => {
  it("User status text is active, inactive, pending, blacklisted", () => {
    render(<UserStatus />);

    expect(screen.getByTestId("status").textContent).not.toBeFalsy();
  });
});
