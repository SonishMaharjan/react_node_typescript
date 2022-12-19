export const removeSecondFromTime = (time: string | undefined) => {
  return time?.replace(/:[^:]*$/, "");
};
