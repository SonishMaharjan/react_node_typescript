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
      <NursesList></NursesList>
    </div>
  );
};

export default HomePage;
