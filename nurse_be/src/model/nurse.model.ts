import dbProvider from "../db/db";

enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAYS,
}

export interface Nurse {
  id?: string;
  name?: string;
  email?: string;
  contact?: string;
  created_at?: Date;
  updated_at?: Date;
  weekdays?: WeekDays[] | string;
  startTime?: string;
  endTime?: string;
  isRoundingManager?: boolean;
  image?: string;
  createdBy?: number;
}

/**
 * Create a new nurse Entity.
 * 
 * @param {Nurse} nurse 
 * @returns {Promise<Nurse>}
 */
export const createNurse = async (nurse: Nurse) => {
  const timeStamp = new Date();

  const weekdays = JSON.stringify(nurse?.weekdays || []);

  const newNurse = {
    ...nurse,
    weekdays,
    created_at: timeStamp,
    updated_at: timeStamp,
  };

  const result = (await dbProvider
    .postgres("nurses")
    .insert(newNurse)
    .returning("*")) as Nurse[];

  return result;
};

export interface FilterNurseQuery
  extends Omit<Nurse, "created_at" | "updated_at"> {}

  /**
 * Find a nurse Entity from provided query.
 * 
 * @param {Nurse} nurse 
 * @returns {Promise<Nurse[]> }
 */
export const findNurseBy = async (
  query: FilterNurseQuery = {}
): Promise<Nurse[]> => {
  const result = await dbProvider
    .postgres("nurses")
    .where(query)
    .orderBy("isRoundingManager", "desc")
    .orderBy("created_at", "desc");

  return result;
};

/**
 * Function to update nurse entity.
 * 
 * @param {FilterNurseQuery} whereQuery 
 * @param {Nurse} nurse 
 * @returns {Promise<Nurse>}
 */
export const updateNurse = async (
  whereQuery: FilterNurseQuery = {},
  nurse: Nurse
) => {
  const timeStamp = new Date();

  const weekdays = JSON.stringify(nurse?.weekdays || []);

  nurse = {
    ...nurse,
    weekdays,
    updated_at: timeStamp,
  };

  const result = (await dbProvider
    .postgres("nurses")
    .where(whereQuery)
    .update(nurse)
    .returning("*")) as Nurse[];

  return result;
};

export interface DeleteNurseQuery extends Pick<Nurse, "id"> {}


/**
 * Function to delete nurse entity.
 * 
 * @param {FilterNurseQuery} whereQuery 
 * @returns {Promise}
 */
export const deleteNurse = async (whereQuery: FilterNurseQuery = {}) => {
  const timeStamp = new Date();

  const result = (await dbProvider
    .postgres("nurses")
    .where(whereQuery)
    .del()
    .returning("*")) as Nurse[];

  return result;
};
