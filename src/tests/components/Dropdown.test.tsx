import { render, screen } from "@testing-library/react";
import { MockedFunction, vitest } from "vitest";
import Dropdown from "../../components/Dropdown";

describe("Dropdown", () => {
  it("Dropdown value null, falsy or undefined", () => {
    const updatePaginatedResults = vitest.fn();
    render(<Dropdown updatePaginatedResults={updatePaginatedResults} />);
    const dropdownValue = screen.getByTestId("value");

    expect(dropdownValue).not.toBeFalsy();
  });
});
