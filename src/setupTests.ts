import matchers from "@testing-library/jest-dom/matchers";
import { setupServer } from "msw/node";
import { expect } from "vitest";
import { handlers } from "./tests/mocks/handler";

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// beforeAll(() => server.resetHandlers());
// afterAll(() => server.close());

expect.extend(matchers);
