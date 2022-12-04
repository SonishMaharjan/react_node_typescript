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

export const findNurseBy = async (
  query: FilterNurseQuery = {}
): Promise<Nurse[]> => {
  const result = await dbProvider.postgres("nurses").where(query);

  return result;
};

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

export const deleteNurse = async (whereQuery: FilterNurseQuery = {}) => {
  const timeStamp = new Date();

  const result = (await dbProvider
    .postgres("nurses")
    .where(whereQuery)
    .del()
    .returning("*")) as Nurse[];

  return result;
};
