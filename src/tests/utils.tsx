import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import usersMockData from "../data/usersMockData.json";

export const handlers = [
  rest.get("*/lendsqr/api/v1/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersMockData));
  }),
];

export function renderWithClient(ui: React.ReactElement) {
  const { rerender, ...result } = render(
    <BrowserRouter>
      <Routes>
        <Route path={"/dashboard"} element={ui} />
      </Routes>
    </BrowserRouter>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <BrowserRouter>
          <Routes>
            <Route path={"/dashboard"} element={rerenderUi} />
          </Routes>
        </BrowserRouter>
      ),
  };
}

export function createWrapper(pathURL: string) {
  return ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <Routes>
        <Route path={pathURL} element={children} />
      </Routes>
    </BrowserRouter>
  );
}
