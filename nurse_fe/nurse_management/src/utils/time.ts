/**
 * Function to remove seconds from hh:mm:ss format.
 * @param time
 * @returns
 */
export const removeSecondFromTime = (time: string | undefined) => {
  return time?.replace(/:[^:]*$/, "");
};
