import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use((c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type");

  return next();
});

app.get("/", async (c) => {
  return c.text("Hello Hono!");
});

export default app;
