import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import { deleteNurseHandler } from "../controller/nurse.controller";

import Nurse, { NurseDocument } from "../model/nurse.model";

export function createNurse(input: DocumentDefinition<NurseDocument>) {
  return Nurse.create(input);
}

export function findNurse(
  query: FilterQuery<NurseDocument>,
  options: QueryOptions = { lean: true }
) {
  return Nurse.findOne(query, {}, options);
}

export function findAndUpdateNurse(
  query: FilterQuery<NurseDocument>,
  update: UpdateQuery<NurseDocument>,
  options: QueryOptions
) {
  return Nurse.findOneAndUpdate(query, update, options);
}

export function deleteNurse(query: FilterQuery<NurseDocument>) {
  return Nurse.deleteOne(query);
}

export async function findAllNurses(query: FilterQuery<NurseDocument>) {
  return Nurse.find(query).lean();
}
