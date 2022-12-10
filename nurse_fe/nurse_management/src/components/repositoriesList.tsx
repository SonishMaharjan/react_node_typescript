import { useDispatch } from "react-redux";
import { actionCreators } from "../state";


import { useTypedSelector } from "../hooks/userTypedSelector";

export interface INurseListProps {}

const NurseList: React.FC<INurseListProps> = () => {
  const dispatch = useDispatch();

  const { data, error, loading } = useTypedSelector(
    (state) => state.userReducer
  );

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(actionCreators.loginUser("heeh") as any);
  };

  return (
    <div>
      Nurse List page
      <button onClick={onSubmit}>Get Nursers</button>
      <div>
        {error && <h3>Error Occured</h3>}
        {loading && <h3>Loading....</h3>}

        {!error && !loading && data}
      </div>
    </div>
  );
};

export default NurseList;
