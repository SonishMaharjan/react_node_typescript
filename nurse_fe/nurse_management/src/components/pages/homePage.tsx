import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import RepositoriesList from "../repositoriesList";

import NurseList from "../nurseList";

export interface IHomePageProps {
  onLogin: () => void;
  onLogout: () => void;
  token: string;
}

const HomePage: React.FC<IHomePageProps> = ({ onLogin, onLogout, token }) => {
  const navigate = useNavigate();

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
      <div> This is nursle list</div>
      <RepositoriesList></RepositoriesList>
      <div> -------Nurse list---------</div>
      <NurseList></NurseList>
    </div>
  );
};

export default HomePage;
