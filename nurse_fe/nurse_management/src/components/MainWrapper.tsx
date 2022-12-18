import React, { useEffect } from "react";

import jwtDecode from "jwt-decode";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import NurseDetailPage from "./pages/nurseDetailPage";
import PageNotFound from "./pages/pageNotFound";

import { redirectTo } from "../utils";

import { Provider } from "react-redux";
import { store } from "../state";

// import { redirectTo } from "./utils";

import { useActions } from "../hooks/useAction";

export interface IMainWrapperProps {}

const MainWrapper: React.FunctionComponent<IMainWrapperProps> = () => {
  const [token, setToken] = React.useState<string>("");

  const { loginUser } = useActions();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setToken(accessToken);

      const data = jwtDecode(accessToken);

      loginUser(data);
    }
  }, []);

  const onLogout = () => {
    localStorage.setItem("accessToken", "");
    redirectTo("/login");
  };

  return (
    <>
      <div className="page-header">
        <h1>Nurse Management</h1>

        {token && (
          <button onClick={onLogout} className="btn btn-info">
            Logout
          </button>
        )}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage></HomePage>}></Route>
            <Route
              path="/nurse/:id"
              element={<NurseDetailPage></NurseDetailPage>}
            ></Route>
          </Route>
          )<Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainWrapper;
