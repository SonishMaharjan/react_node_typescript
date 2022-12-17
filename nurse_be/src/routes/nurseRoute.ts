import express, { Router } from "express";

const nurseRoute: Router = express.Router();

import validateRequest from "../middleware/validateRequest";

import {
  createNurseSchema,
  updateNurseSchema,
  deleteNurseSchema,
} from "../schema/nurse.shcema";

import {
  createNurseHandler,
  getAllNurseHandler,
  getNurseHandler,
  deleteNurseHandler,
  updateNurseHandler,
  uploadNurseImageHandler,
} from "../controller/nurse.controller";
import { findAllNurse } from "../service/nurse.service";

import { uploadImageService } from "../service/imageUploadServices";

//Register nurse
nurseRoute.post("/", validateRequest(createNurseSchema), createNurseHandler);

//Get nurses
nurseRoute.get("/", getAllNurseHandler);

nurseRoute.get("/:nurseId", getNurseHandler);

nurseRoute.put(
  "/:nurseId",
  validateRequest(updateNurseSchema),
  updateNurseHandler
);

nurseRoute.delete(
  "/:nurseId",
  validateRequest(deleteNurseSchema),
  deleteNurseHandler
);

nurseRoute.post(
  "/images",
  uploadImageService.single("nurseImage"),
  uploadNurseImageHandler
);

export default nurseRoute;
