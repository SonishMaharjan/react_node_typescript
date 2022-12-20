import express, { Express, Request, Response, Router } from "express";

import { requireUser } from "./middleware";

import userRoute from "./routes/userRoute";
import sessionRoute from "./routes/sessionRoute";
import nurseRoute from "./routes/nurseRoute";

const routes: Router = express.Router();

routes.use("/users", userRoute);
routes.use("/sessions", sessionRoute);
routes.use("/nurses", requireUser, nurseRoute);

export default routes;
