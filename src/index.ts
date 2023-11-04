import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

const app = new Elysia()
  .use(cors())

  .get("/", () => {
    return "Hello Elysia";
  })
  .post("/hack", ({ body }) => {
    console.log("Body", body);
    // Parse body as cookies
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
