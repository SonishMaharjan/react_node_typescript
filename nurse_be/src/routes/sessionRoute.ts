import express, { Router } from "express";

const sessionRoute: Router = express.Router();

import { createUserSessionSchema } from "../schema/user.schema";

import { createUserSessionHandler } from "../controller/session.controller";

import validateRequest from "../middleware/validateRequest";

import { requireUser } from "../middleware/index";

import { invalidateUserSessionHandler } from "../controller/user.controller";
import { getUserSessionHandler } from "../controller/session.controller";

// Login
sessionRoute.post(
  "/",
  validateRequest(createUserSessionSchema),
  createUserSessionHandler
);

// Get the user session
sessionRoute.get("/", requireUser, getUserSessionHandler);

//Logout
sessionRoute.delete("/", requireUser, invalidateUserSessionHandler);

export default sessionRoute;
