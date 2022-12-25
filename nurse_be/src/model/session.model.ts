/* tslint:disable await-promise */

import dbProvider from "../db/db";
import { omit } from "lodash";

export interface Session {
  id?: string;
  isValid?: boolean;
  userAgent?: string;
  created_at?: Date;
  updated_at?: Date;
  user_id?: string;
}

export interface CreateSessionInput extends Omit<Session, "id"> {}

/**
 * Function create new session entity.
 * 
 * @param {Session} session 
 * @returns 
 */
export const createSession = async (session: CreateSessionInput) => {
  const timeStamp = new Date();

  session = {
    ...session,
    isValid: true,
    created_at: timeStamp,
    updated_at: timeStamp,
  };

  const result = (await dbProvider
    .postgres("sessions")
    .insert(session)
    .returning("*")) as Session[];

  return result;
};

export interface GetSessionQuery
  extends Omit<Session, "created_at" | "updated_at"> {}

/**
* Function to find session entity by provided query.
* @param {GetSessionQuery} query 

* @returns {Promise<Session>}
*/
export const findBy = async (
  query: GetSessionQuery = {}
): Promise<Session[]> => {
  const result = await dbProvider.postgres("sessions").where(query);

  return result;
};

export interface UpdateSessionQuery extends Pick<Session, "id"> {}

/**
 * Function to update session entity by provided query.
 * 
 * @param {UpdateSessionQuery} whereQuery 
 * @param {Session} session 
 * 
 * @returns {Promise<Session>}
 */
export const updateSession = async (
  whereQuery: UpdateSessionQuery = {},
  session: Session
) => {
  const timeStamp = new Date();

  session = {
    ...session,
    updated_at: timeStamp,
  };

  const result = (await dbProvider
    .postgres("sessions")
    .where(whereQuery)
    .update(session)
    .returning("*")) as Session[];

  return result;
};
