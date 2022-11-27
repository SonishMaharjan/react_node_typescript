import { Express, Request, Response } from "express";

import validateRequest from "./middleware/validateRequest";

import { requireUser } from "./middleware/index";

import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";

import {
  createUserHandler,
  invalidateUserSessionHandler,
} from "./controller/user.controller";

import {
  createUserSessionHandler,
  getUserSessionHandler,
} from "./controller/session.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  //Register User
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user session
  app.get("/api/sessions", requireUser, getUserSessionHandler);

  //Logout
  app.delete("/api/sessions", requireUser, invalidateUserSessionHandler);
}
