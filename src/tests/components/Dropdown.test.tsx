import { render, screen } from "@testing-library/react";
import Dropdown from "../../components/Dropdown";

describe("Dropdown", () => {
  it("Dropdown value null, falsy or undefined", () => {
    render(<Dropdown />);
    const dropdownValue = screen.getByTestId("value");

    expect(dropdownValue).not.toBeFalsy();
  });
});
