import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // returns something like this: { searchRepositories: dispatch(searchRepositories) }
  return bindActionCreators(actionCreators, dispatch);
};
