import { authenticatedHttp } from "./http";

import { removeSecondFromTime } from "../utils/time";

export const fetchAllNurses = async () => {
  const { data } = await authenticatedHttp.get("/nurses");

  return data.map((nurse: INurse) => fromJSON(nurse));
};

interface INurse {
  id?: string;
  name: string;
  email: string;
  isRoundingManager?: boolean;
  weekdays?: string[];
  startTime?: string;
  endTime?: string;
}

export const createNurseServices = async (nurseData: INurse) => {
  const { data } = await authenticatedHttp.post("nurses", toJSON(nurseData));

  return fromJSON(data);
};

export const updateNurseServices = async (id: string, nurseData: INurse) => {
  const { data } = await authenticatedHttp.put(
    `nurses/${id}`,
    toJSON(nurseData)
  );

  return fromJSON(data);
};

export const deleteNurseServices = async (id: string) => {
  const { data } = await authenticatedHttp.delete(`nurses/${id}`);

  return fromJSON(data);
};

const toJSON = (nurse: INurse) => {
  return {
    ...nurse,
    startTime: nurse.startTime || null,
    endTime: nurse.endTime || null,
  };
};

const fromJSON = (nurse: INurse) => {
  return {
    ...nurse,
    startTime: removeSecondFromTime(nurse.startTime),
    endTime: removeSecondFromTime(nurse.endTime),
  };
};

