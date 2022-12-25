import { Request, Response } from "express";

import { get } from "lodash";

import {
  addNurse,
  findAllNurse,
  findNurseById,
  updateNurseById,
  deleteNurseById,
  uploadNurseImage,
} from "../service/nurse.service";

/**
 * Handler to create nurse.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function createNurseHandler(req: Request, res: Response) {
  const userId = get(req, "user.id");

  const body = req.body;
  const nurse = await addNurse({ ...body, userId });

  return res.send(nurse);
}

/**
 * Handler to update nurse.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function updateNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const update = req.body;

  const nurse = await findNurseById(nurseId);

  if (!nurse) {
    return res.sendStatus(404);
  }

  const updatedNurse = await updateNurseById(nurseId, update);

  return res.send(updatedNurse);
}

/**
 * Handler to get a nurse by id.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function getNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const nurse = await findNurseById(nurseId);

  if (!nurse) {
    res.sendStatus(404);
  }

  return res.send(nurse);
}

/**
 * Handler to delete nurse.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function deleteNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const nurse = await findNurseById(nurseId);

  if (!nurse) return res.sendStatus(404);

  await deleteNurseById(nurseId);

  return res.sendStatus(200);
}

/**
 * Handler to get all nurses.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function getAllNurseHandler(req: Request, res: Response) {
  const nurses = await findAllNurse({});

  return res.send(nurses);
}

/**
 * Handler to update nurse.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function uploadNurseImageHandler(req: Request, res: Response) {
  const filename = `${Date.now()}-${req.file?.originalname}`;

  const data = await uploadNurseImage(
    filename,
    req.file?.buffer,
    req.file?.mimetype || ""
  );

  return res.send(data);
}
