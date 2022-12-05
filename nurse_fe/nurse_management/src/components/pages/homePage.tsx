import { useState } from "react";

const HomePage: React.FC = () => {
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

  return <div>Home page</div>;
};

export default HomePage;
