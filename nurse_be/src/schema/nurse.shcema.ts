import { object, string, ref } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
};

const params = {
  params: object({
    nurseId: string().required("nurseId is required"),
  }),
};

export const createNurseSchema = object({
  ...payload,
});

export const updateNurseSchema = object({
  ...params,
});

export const deleteNurseSchema = object({
  ...params,
});
