// src/mocks/handlers.js
import { rest } from "msw";

const baseUrl = "https://jsonplaceholder.typicode.com";

const allUsers = [
  {
    id: 999,
    name: "Test Name",
    username: "Test Username",
    email: "email@test.com",
    phone: "99999999999",
  },
];

export const handlers = [
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allUsers));
  }),
];
