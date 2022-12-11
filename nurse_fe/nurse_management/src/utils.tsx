export const redirectTo = (route: string = "") => {
  // eslint-disable-next-line no-restricted-globals
  location.replace("http://localhost:3000" + route);
};
