import { ActionType } from "../action-types";

import { Action } from "../actions";

import { Dispatch } from "redux";

import { loginUser as loginUserService } from "../../services/userServices";
interface IUserLogin {
  email: string;
  password: string;
}

export const loginUser = (userData: IUserLogin) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_USER,
    });

    try {
      const data = await loginUserService(userData);

      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      dispatch({
        type: ActionType.LOGIN_USER_SUCCESS,
        payload: accessToken,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: err.message,
      });
    }
  };
};
