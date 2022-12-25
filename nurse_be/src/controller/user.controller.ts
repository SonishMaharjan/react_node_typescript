import { Request, Response } from "express";

import { omit } from "lodash";

import log from "../logger";

import { get } from "lodash";

import { updateSession } from "../model/session.model";

import { createUserService, findAllUserService } from "../service/user.service";

/**
 * Handler to create user.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUserService(req.body);

    return res.send(omit(user, "password"));
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}

/**
 * Handler to find all users.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function findAllUserHandler(req: Request, res: Response) {
  try {
    const users = await findAllUserService();

    return res.send(users);
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}

/**
 * Handler to invalid user session when user logouts.
 * 
 * @param {Request} req
 * @param {Response} res 
 * @returns Promise
 */
export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ id: sessionId }, { isValid: false });

  return res.sendStatus(200);
}
