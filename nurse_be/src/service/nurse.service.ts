import { uploadImageToAws } from "./awsServices";

import {
  Nurse,
  createNurse,
  updateNurse,
  deleteNurse,
  findNurseBy,
  FilterNurseQuery,
} from "../model/nurse.model";

/**
 * Function to add nurse.
 * 
 * @param {Nurse} input 
 * @returns {Nurse}
 */
export async function addNurse(input: Nurse) {
  const nurse = await createNurse(input);
  return nurse;
}

/**
 * Function to find all nurse by provided using filter query.
 * 
 * @param {FilterNurseQuery} query 
 * @returns {Nurse[]}
 */
export async function findAllNurse(query: FilterNurseQuery) {
  const nurses = await findNurseBy();

  return nurses;
}

/**
 * Find nurse by id.
 * 
 * @param {String} id 
 * @returns {Nurse}
 */
export async function findNurseById(id: string) {
  const nurses = await findNurseBy({ id });

  return nurses;
}

/**
 * Function to updated nurse by provided id.
 * 
 * @param {String} id 
 * @param {Nurse} updateNurseData 
 * @returns 
 */
export async function updateNurseById(id: string, updateNurseData: Nurse) {
  const updatedNurse = await updateNurse({ id }, updateNurseData);
  return updatedNurse;
}

/**
 * Function to delete nurse by id.
 * 
 * @param {String} id 
 * @returns 
 */
export async function deleteNurseById(id: string) {
  return await deleteNurse({ id });
}

/**
 * Function to upload Nurrse Image.
 * 
 * @param fileName 
 * @param file 
 * @param type 
 * @returns 
 */
export const uploadNurseImage = async (
  fileName: any,
  file: any,
  type: string
) => {
  return await uploadImageToAws(fileName, file, type);
};
