import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcrypt";

const privateKey = config.get("SERVER.privateKey") as string;

/**
 * Function to sign token.
 * 
 * @param object 
 * @param options 
 * @returns 
 */
export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

/**
 * Function to decode token.
 * 
 * @param token 
 * @returns 
 */
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

/**
 * Function to get hash from password.
 * 
 * @param {String} password 
 * @returns {String}
 */
export async function getPasswordHash(password: string = "") {
  // Random additional data
  const salt = await bcrypt.genSalt(config.get("SERVER.saltWorkFactor"));

  const hash = await bcrypt.hashSync(password, salt);

  return hash;
}

/**
 * Compare provided string with hash.
 * 
 * @param {String} compareString 
 * @param {String} compareTo 
 * @returns {Boolean}
 */
export function compareString(
  compareString: string = "",
  compareTo: string = ""
) {
  return bcrypt.compare(compareString, compareTo).catch((e) => false);
}

export function sum(a: number, b: number) {
  return a + b;
}