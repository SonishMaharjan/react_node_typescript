import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser, validatePassword } from "../service/user.service";
import log from "../logger";

import { updateSession } from "../service/user.service";

import { get } from "lodash";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
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

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}