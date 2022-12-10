import { ActionType } from "../action-types";

export const loginUser = (text: string) => {
  const data = ["react", "redux", "redux-thunk"];

  return {
    type: ActionType.LOGIN_USER_SUCCESS,
    payload: data,
  };
};
