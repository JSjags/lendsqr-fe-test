import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteError from "../../pages/RouteError";

const RouteErrorMock = (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<RouteError />} />
    </Routes>
  </BrowserRouter>
);

describe("Route Error", () => {
  it("Should render text when path does not exist", () => {
    render(RouteErrorMock);
    const routeErrorMessaage = screen.getByTestId("route error");

    expect(routeErrorMessaage).toHaveTextContent(
      "OOOPs, We couldn't find that page"
    );
  });
});
