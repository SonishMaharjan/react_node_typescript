import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

import { useSelector } from "react-redux";

export interface INurseListProps {}

const NurseList: React.FC<INurseListProps> = () => {
  const dispatch = useDispatch();

  const { data, error, loading } = useSelector(
    (state: any) => state.userReducer
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
