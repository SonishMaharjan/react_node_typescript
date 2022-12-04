import { Request, Response } from "express";

import { omit } from "lodash";

import log from "../logger";

import { get } from "lodash";

import { updateSession } from "../model/session.model";

import { createUserService, findAllUserService } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUserService(req.body);

    return res.send(omit(user, "password"));
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}

export async function findAllUserHandler(req: Request, res: Response) {
  try {
    const users = await findAllUserService();

    return res.send(users);
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ id: sessionId }, { isValid: false });

  return res.sendStatus(200);
}
