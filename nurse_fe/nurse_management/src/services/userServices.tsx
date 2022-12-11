import { http } from "./http";

interface IUserLogin {
  email: string;
  password: string;
}

export const loginUser = async (userData: IUserLogin) => {
  const { data } = await http.post("sessions", userData);

  return data;
};
