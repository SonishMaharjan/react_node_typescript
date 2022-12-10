import { Action } from "../actions";
import { ActionType } from "../action-types";

interface UserState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: UserState = {
  loading: false,
  error: null,
  data: [],
};

const userReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return { loading: true, error: null, data: [] };

    case ActionType.LOGIN_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ActionType.LOGIN_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default userReducer;
