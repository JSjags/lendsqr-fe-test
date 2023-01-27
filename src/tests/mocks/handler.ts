import { rest } from "msw";
import userDetailsMock from "../../data/userDetailsMockData.json";

export const handlers = [
  //   rest.get("/", (req, res, ctx) => {
  //     console.log("hello");
  //     return res(ctx.status(200));
  //   }),
  rest.get(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/undefined",
    (req, res, ctx) => {
      console.log("hello");
      return res(ctx.status(200), ctx.json(userDetailsMock));
    }
  ),
];
