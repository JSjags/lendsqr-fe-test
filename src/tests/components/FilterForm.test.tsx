import { render, screen } from "@testing-library/react";
import UserStatus from "../../components/UserStatus";

import FilterForm from "../../components/FilterForm";

describe("Filter", () => {
  it("Filter form is present", () => {
    render(<FilterForm left={20} />);
    const form = screen.getByTestId("form");

    expect(screen.getByTestId("filter")).toContainElement(form);
  });
});
