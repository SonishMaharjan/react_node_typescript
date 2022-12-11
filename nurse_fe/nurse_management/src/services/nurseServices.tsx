import { authenticatedHttp } from "./http";

export const fetchAllNurses = async () => {
  const { data } = await authenticatedHttp.get("/nurses");

  return data;
};
