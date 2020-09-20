require("dotenv").config();
const express = require("express");
const next = require("next");
const thoughtsAPI = require("../thoughts-api");
const initAuth = require("./middleware/auth");
const cookieSession = require("cookie-session");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: ["ssid"],
    })
  );

  initAuth(server);
  server.use(thoughtsAPI);

  // handling everything else with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
  });
});
