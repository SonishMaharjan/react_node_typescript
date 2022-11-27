import { Express, Request, Response } from "express";

import validateRequest from "./middleware/validateRequest";

import { requireUser } from "./middleware/index";


import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";

import {
  createNurseSchema,
  updateNurseSchema,
  deleteNurseSchema,
} from "./schema/nurse.shcema";

import {
  createUserHandler,
  invalidateUserSessionHandler,
} from "./controller/user.controller";

import {
  createUserSessionHandler,
  getUserSessionHandler,
} from "./controller/session.controller";

import {
  createNurseHandler,
  updateNurseHandler,
  deleteNurseHandler,
  getNurseHandler,
  getAllNurseHandler,
} from "./controller/nurse.controller";

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

  //Create a nurse
  app.post(
    "/api/nurse",
    [requireUser, validateRequest(createNurseSchema)],
    createNurseHandler
  );

  // Update nurse
  app.put(
    "/api/nurse/:nurseId",
    [requireUser, validateRequest(updateNurseSchema)],
    updateNurseHandler
  );

  // Get all nurses
  app.get("/api/nurse", [requireUser], getAllNurseHandler);

  //Get a nurse
  app.get("/api/nurse/:nurseId", [requireUser], getNurseHandler);

  // Delete nurse
  app.delete(
    "/api/nurse/:nurseId",
    [requireUser, validateRequest(deleteNurseSchema)],
    deleteNurseHandler
  );
}
