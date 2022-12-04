import { createUser, findBy, CreateUserInput } from "../model/user.model";

import { User } from "../model/user.model";

import { omit } from "lodash";

import { compareString } from "../utils/jwt.utils";

export async function createUserService(input: CreateUserInput) {
  try {
    const user = (await createUser(input))[0];

    return omit(user, "password");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findAllUserService() {
  try {
    return await findBy({});
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function validatePasswordService({
  email,
  password,
}: {
  email: User["email"];
  password: string;
}) {
  const user = (await findBy({ email }))[0];

  if (!user) return false;

  const isValid = await compareString(password, user.password);

  if (!isValid) return false;

  return omit(user, "password");
}
