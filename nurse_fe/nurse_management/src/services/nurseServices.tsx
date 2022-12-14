import { authenticatedHttp } from "./http";

export const fetchAllNurses = async () => {
  const { data } = await authenticatedHttp.get("/nurses");

  return data;
};



interface INurse {
  name: string;
  email: string;
  isRoundingManager?: boolean;
  weekdays?: string[];
  startTime?: string;
  endTime?: string;
}

export const createNurseServices = async (nurseData: INurse) => {
  const { data } = await authenticatedHttp.post("nurses", nurseData);

  return data;
};