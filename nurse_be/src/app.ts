import express from "express";
import config from "config";
import log from "./logger";

import { deserializeUser } from "./middleware/index";

import routes from "./routes";

import connect from "./db/connect";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server litening port http://${host}:${port}.`);

  connect();

  routes(app);
});
