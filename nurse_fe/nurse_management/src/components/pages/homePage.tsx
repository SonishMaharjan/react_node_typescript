import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export interface IHomePageProps {
  onLogin: () => void;
  onLogout: () => void;
  token: string;
}

const HomePage: React.FC<IHomePageProps> = ({ onLogin, onLogout, token }) => {
  const navigate = useNavigate();
  //   const [term, setTerm] = useState("");

  //  **Replace dispatch** const dispatch = useDispatch();
  //   const { searchRepositories } = useActions(); // **Replaced * dispatch**

  // ** Fixe Use Any **
  //   const { data, error, loading } = useSelector(
  //     (state: any) => state.repositoriesReducer
  //   );
  // ** Fixed Use Any **
  //   const { data, error, loading } = useTypedSelector(
  //     (state) => state.repositoriesReducer
  //   );

  //   console.log(data);

  //   console.log(state);

  //   const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();

  //     // **Replace dispatch** dispatch(actionCreators.searchRepositories(term) as any);
  //     searchRepositories(term); //**Replaced * dispatch**
  //   };

  //   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTerm(event.target.value);

  //   };

  return (
    <div>
      Home page Link to detail page <Link to="/nurse/1"> Go to nurse 1</Link>
      <button onClick={() => navigate("/nurse/3")}>Go nurse 3</button>
      <div>
        <h4> Sign in</h4>
        <div>
          {token ? (
            <button type="button" onClick={onLogout}>
              Sign Out
            </button>
          ) : (
            <button onClick={onLogin}> Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
