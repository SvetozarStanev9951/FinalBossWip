// src/mocks/handlers.js
import { rest } from "msw";
import { allUsers } from "./allUsers";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const handlers = [
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allUsers));
  }),
];
