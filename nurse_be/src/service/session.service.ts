import config from "config";

import { Session } from "../model/session.model";

import { createSession } from "../model/session.model";

import { User } from "../model/user.model";

import { sign, decode } from "../utils/jwt.utils";

import { findBy as findSessionBy } from "../model/session.model";
import { findBy as findUserBy } from "../model/user.model";

import { get } from "lodash";

/**
 * Function to create a session.
 * 
 * @param {String} userId 
 * @param {String} userAgent 
 * @returns {Session}
 */
export async function createSessionService(
  userId: string = "",
  userAgent: string = ""
) {
  const session = (
    await createSession({
      user_id: userId,
      userAgent: userAgent,
    })
  )[0];

  return session;
}

/**
 * Function to create access token.
 * 
 * @param {{user: User, session: <Session>}}  param
 * @returns {String}
 */
export function createAccessToken({
  user,
  session,
}: {
  user: Omit<User, "password">;
  session: Session;
}) {
  // Build and retrun the access token
  const accessToken = sign(
    { ...user, session: session.id },
    { expiresIn: config.get("SERVER.accessTokenTtl") } // 15 mins
  );

  return accessToken;
}

/**
 * Function to reissue the access token.
 * 
 * @param {{refreshToken: string}} 
 * @returns 
 */
export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  // Decode the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  const sessionId = get(decoded, "_id");

  // Get session
  const session = (await findSessionBy({ id: sessionId }))[0];

  // Make sure the session is still valid
  if (!session || !session?.isValid) return false;

  const user = (await findUserBy({ id: session.user_id }))[0];

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
}
