import { useActions } from "../hooks/useAction";

import { useTypedSelector } from "../hooks/userTypedSelector";

export interface INurseListProps {}

const NurseList: React.FC<INurseListProps> = () => {
  const { loginUser } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.userReducer
  );

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = {
      email: "sonish@gmail.com",
      password: "Hello123",
    };

    loginUser(data);
  };

  return (
    <div>
      Nurse List page
      <button onClick={onSubmit}>Login</button>
      <div>
        {error && <h3>Error Occured</h3>}
        {loading && <h3>Loading....</h3>}

        {!error && !loading && data}
      </div>
    </div>
  );
};

export default NurseList;
