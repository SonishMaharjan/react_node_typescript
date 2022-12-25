/* tslint:disable await-promise */

import dbProvider from "../db/db";
import { omit } from "lodash";
import { getPasswordHash } from "../utils/jwt.utils";

export interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateUserInput extends Omit<User, "id"> {
  passwordConfirmation: string;
}

/**
 * Function to create a new user entity.
 * 
 * @param {User} user 
 * @returns {Promise<User>}
 */
export const createUser = async (user: CreateUserInput) => {
  let newUser = omit(user, "passwordConfirmation");

  const timeStamp = new Date();

  const hashedPassword = await getPasswordHash(user.password);

  newUser = {
    ...newUser,
    created_at: timeStamp,
    updated_at: timeStamp,
    password: hashedPassword,
  };

  const result = (await dbProvider
    .postgres("users")
    .insert(newUser)
    .returning("*")) as User[];

  return result;
};

export interface GetUserQuery
  extends Omit<User, "created_at" | "password" | "updated_at"> {}

/**
 * Function to find user on basis of provided query.
 * 
 * @param {GetUserQuery} query 
 * @returns {Promise<User[]>}
 */
export const findBy = async (query: GetUserQuery = {}): Promise<User[]> => {
  const result = await dbProvider.postgres("users").where(query);

  return result;
};
