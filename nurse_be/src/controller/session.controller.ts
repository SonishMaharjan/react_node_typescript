import { Request, Response } from "express";

import { validatePassword } from "../service/user.service";

import { createSession, createAccessToken } from "../service/session.service";
import config from "config";

import { sign } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create the session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // Create the access token
  const accessToken = createAccessToken({ user, session });

  // Create the refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  }); //1 year)

  // send the refresh and access token
  return res.send({ accessToken, refreshToken });
}
