import { http } from "./http";

interface IUserLogin {
  email: string;
  password: string;
}

export const loginUser = async (userData: IUserLogin) => {
  const { data } = await http.post("sessions", userData);

  return data;
};


interface IUserSignUp extends IUserLogin {
  name: string;
}

export const signUpUser = async (userData: IUserSignUp) => {
  const { data } = await http.post("users", userData);

  return data;
};