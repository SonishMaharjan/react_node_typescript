import { http } from "./http";

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserSignUp extends IUserLogin {
  name: string;
}

/**
 * Function to login a user.
 *
 * @param {IUserLogin} userData
 * @returns
 */
export const loginUser = async (userData: IUserLogin) => {
  const { data } = await http.post("sessions", userData);

  return data;
};


/**
 * Function to sign up a user.
 * 
 * @param {IUserSignUp} userData 
 * @returns 
 */
export const signUpUser = async (userData: IUserSignUp) => {
  const { data } = await http.post("users", userData);

  return data;
};