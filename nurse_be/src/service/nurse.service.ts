import {
  Nurse,
  createNurse,
  updateNurse,
  deleteNurse,
  findNurseBy,
  FilterNurseQuery,
} from "../model/nurse.model";

export async function addNurse(input: Nurse) {
  const nurse = await createNurse(input);
  return nurse;
}

export async function findAllNurse(query: FilterNurseQuery) {
  const nurses = await findNurseBy();

  return nurses;
}

export async function findNurseById(id: string) {
  const nurses = await findNurseBy({ id });

  return nurses;
}

export async function updateNurseById(id: string, nurse: Nurse) {
  const updatedNurse = await updateNurse({ id }, nurse);
  return updatedNurse;
}

export async function deleteNurseById(id: string) {
  return await deleteNurse({ id });
}
