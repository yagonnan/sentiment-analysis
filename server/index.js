require("dotenv").config();
const express = require("express");
const next = require("next");
const bodyParser = require('body-parser');
// const thoughtsAPI = require("../thoughts-api");
const nlpRouter = require('./nlp');
const cors = require('cors');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/api/v1/healthcheck', ({ res }) => res.sendStatus(200));

  server.use('/api/v1/nlp', nlpRouter);

  server.disable('x-powered-by');
  // handling everything else with Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
  });
});
