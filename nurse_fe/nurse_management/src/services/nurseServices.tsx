import { authenticatedHttp } from "./http";

import { removeSecondFromTime } from "../utils/time";

interface INurse {
  id?: string;
  name: string;
  email: string;
  isRoundingManager?: boolean;
  weekdays?: string[];
  startTime?: string;
  endTime?: string;
}

/**
 * Fucntion to fetch all nurses.
 * 
 * @returns {Promise<INurse[]>}
 */
export const fetchAllNurses = async () => {
  const { data } = await authenticatedHttp.get("/nurses");

  return data.map((nurse: INurse) => fromJSON(nurse));
};

/**
 * Function to create new nurse.
 * 
 * @param {INurse} nurseData 
 * @returns {INurse}
 */
export const createNurseServices = async (nurseData: INurse) => {
  const { data } = await authenticatedHttp.post("nurses", toJSON(nurseData));

  return fromJSON(data);
};

/**
 * Function to update existing nurse.
 * 
 * @param {String} id 
 * @param {INurse} nurseData 
 * @returns {INurse}
 */
export const updateNurseServices = async (id: string, nurseData: INurse) => {
  const { data } = await authenticatedHttp.put(
    `nurses/${id}`,
    toJSON(nurseData)
  );

  return fromJSON(data);
};

/**
 * Function to delete nurse.
 * 
 * @param {String} id 
 * @returns 
 */
export const deleteNurseServices = async (id: string) => {
  const { data } = await authenticatedHttp.delete(`nurses/${id}`);

  return fromJSON(data);
};

/**
 * Converts INurse to object to required payload by API.
 * 
 * @param nurse 
 * @returns 
 */
const toJSON = (nurse: INurse) => {
  return {
    ...nurse,
    startTime: nurse.startTime || null,
    endTime: nurse.endTime || null,
  };
};

/**
 * Conver API payload to required object by fronend.
 * 
 * @param nurse 
 * @returns {INurse}
 */
const fromJSON = (nurse: INurse) => {
  return {
    ...nurse,
    startTime: removeSecondFromTime(nurse.startTime),
    endTime: removeSecondFromTime(nurse.endTime),
  };
};

