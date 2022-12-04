import { Request, response, Response } from "express";

import { find, get } from "lodash";

import {
  addNurse,
  findAllNurse,
  findNurseById,
  updateNurseById,
  deleteNurseById,
} from "../service/nurse.service";

export async function createNurseHandler(req: Request, res: Response) {
  const userId = get(req, "user.id");

  const body = req.body;
  const nurse = await addNurse({ ...body, userId });

  return res.send(nurse);
}

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

export async function getNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const nurse = await findNurseById(nurseId);

  if (!nurse) {
    res.sendStatus(404);
  }

  return res.send(nurse);
}

export async function deleteNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const nurse = await findNurseById(nurseId);

  if (!nurse) return res.sendStatus(404);

  await deleteNurseById(nurseId);

  return res.sendStatus(200);
}

export async function getAllNurseHandler(req: Request, res: Response) {
  const nurses = await findAllNurse({});

  return res.send(nurses);
}
