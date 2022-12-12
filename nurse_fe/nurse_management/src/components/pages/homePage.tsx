import { Link, useNavigate } from "react-router-dom";

import NursesList from "../NursesList";

export interface IHomePageProps {
  // onLogin: () => void;
  // onLogout: () => void;
  // token: string;
}

const HomePage: React.FC<IHomePageProps> = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home page Link to detail page <Link to="/nurse/1"> Go to nurse 1</Link>
      <button onClick={() => navigate("/nurse/3")}>Go nurse 3</button>
      <NursesList></NursesList>
      <div> -------Nurse list---------</div>
    </div>
  );
};

export default HomePage;
