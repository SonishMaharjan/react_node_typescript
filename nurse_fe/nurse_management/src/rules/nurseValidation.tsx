/**
 * Validates nurse payload while adding and updating nurse.
 *
 * @param values
 * @returns
 */
export function createNurseValidation(values: any) {
  let errors: any = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  const hhMMRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$|^$/;

  if (!hhMMRegex.test(values.startTime)) {
    errors.startTime = "Invalid start time format. Format should be HH:MM";
  }

  if (!hhMMRegex.test(values.endTime)) {
    errors.endTime = "Invalid end time format. Format should be HH:MM";
  }

  return errors;
}
