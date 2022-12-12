import React, { useEffect } from "react";

import jwtDecode from "jwt-decode";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import NurseDetailPage from "./pages/nurseDetailPage";
import PageNotFound from "./pages/pageNotFound";

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

  return (
    <>
      <div className="page-header">
        <h1>Nurse Management</h1>
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
