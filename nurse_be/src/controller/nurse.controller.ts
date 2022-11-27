import { Request, response, Response } from "express";

import { find, get } from "lodash";

import {
  createNurse,
  findNurse,
  deleteNurse,
  findAndUpdateNurse,
  findAllNurses,
} from "../service/nurse.service";

export async function createNurseHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");

  const body = req.body;
  const nurse = await createNurse({ ...body, createdBy: userId });

  return res.send(nurse);
}

export async function updateNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.postId");

  const update = req.body;

  const nurse = await findNurse({ nurseId });

  if (!nurse) {
    return res.sendStatus(404);
  }

  const updatedNurse = await findAndUpdateNurse({ nurseId }, update, {
    new: true,
  });

  return res.send(updatedNurse);
}

export async function getNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params,nurseId");

  const nurse = await findNurse({ nurseId });

  if (!nurse) {
    res.sendStatus(404);
  }

  return res.send(nurse);
}

export async function deleteNurseHandler(req: Request, res: Response) {
  const nurseId = get(req, "params.nurseId");

  const nurse = await findNurse({ nurseId });

  if (!nurse) return res.sendStatus(404);

  await deleteNurse({ nurseId });

  return res.sendStatus(200);
}

export async function getAllNurseHandler(req: Request, res: Response) {
  const nurses = await findAllNurses({});

  return res.send(nurses);
}
