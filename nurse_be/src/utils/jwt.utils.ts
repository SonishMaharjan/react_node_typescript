import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcrypt";

const privateKey = config.get("SERVER.privateKey") as string;

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

export function decode(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    console.log({ error });

    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

export async function getPasswordHash(password: string = "") {
  // Random additional data
  const salt = await bcrypt.genSalt(config.get("SERVER.saltWorkFactor"));

  const hash = await bcrypt.hashSync(password, salt);

  return hash;
}

export function compareString(
  compareString: string = "",
  compareTo: string = ""
) {
  return bcrypt.compare(compareString, compareTo).catch((e) => false);
}

export function sum(a: number, b: number) {
  return a + b;
}