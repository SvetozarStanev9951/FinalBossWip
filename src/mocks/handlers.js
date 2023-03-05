// src/mocks/handlers.js
import { rest } from "msw";
import { allUsers } from "./allUsers";
import { usersPosts } from "./usersPosts";
import { products } from "./products";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const handlers = [
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allUsers));
  }),

  rest.get(`${baseUrl}/users/9999/posts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersPosts));
  }),

  rest.get("https://some-web-server.com/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
