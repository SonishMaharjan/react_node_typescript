import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export interface INurseDetailPageProps {}

const NurseDetailPage: React.FC<INurseDetailPageProps> = () => {
  //   const [term, setTerm] = useState("");

  const [message, setMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setMessage("th nurse id " + id);
    } else {
      setMessage("invalid nurse id ");
    }
  }, []);

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
      {message}
      <div>Nurse detail page</div>
      validateion token <span> {message}</span>
    </div>
  );
};

export default NurseDetailPage;
