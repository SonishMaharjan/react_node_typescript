import express, { Router } from "express";

const userRoute: Router = express.Router();

import validateRequest from "../middleware/validateRequest";

import { createUserSchema } from "../schema/user.schema";

import {
  createUserHandler,
  findAllUserHandler,
} from "../controller/user.controller";

//Register User
userRoute.post("/", validateRequest(createUserSchema), createUserHandler);

//Get users
userRoute.get("/", findAllUserHandler);

export default userRoute;
