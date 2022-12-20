import { Request, Response } from "express";

import { get } from "lodash";

import { validatePasswordService } from "../service/user.service";

import {
  createAccessToken,
  createSessionService,
} from "../service/session.service";

import config from "config";

import { sign } from "../utils/jwt.utils";

import { findBy as findSessionBy } from "../model/session.model";

/**
 *
 * @param req
 * @param res
 * @returns
 */
export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  const user = await validatePasswordService(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create the session
  const session = await createSessionService(
    user.id,
    req.get("user-agent") || ""
  );

  // Create the access token
  const accessToken = createAccessToken({ user, session });

  // Create the refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("SERVER.refreshTokenTtl"),
  }); //1 year)

  res.set("Access-Control-Allow-Origin", "http://localhost:3000");

  // send the refresh and access token
  return res.send({ accessToken, refreshToken });
}

/**
 *
 * @param req
 * @param res
 * @returns
 */
export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = get(req, "user.id");

  const sessions = await findSessionBy({ user_id: userId, isValid: true });

  return res.send(sessions);
}
