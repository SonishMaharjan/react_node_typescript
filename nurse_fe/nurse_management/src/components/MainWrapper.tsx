import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import PageNotFound from "./pages/pageNotFound";
// import NurseDetailPage from "./pages/nurseDetailPage";

import { redirectTo } from "../utils";

// ** Use it to import redux **
// import { Provider } from "react-redux";
// import { store } from "../state";
// import { useActions } from "../hooks/useAction";

export interface IMainWrapperProps {}

/**
 * Main wrapper compnent for application.
 * 
 * @returns 
 */
const MainWrapper: React.FunctionComponent<IMainWrapperProps> = () => {
  const [token, setToken] = React.useState<string>("");
  const [userData, setUserData] = React.useState<any>({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setToken(accessToken);

      const data = jwtDecode(accessToken);

      setUserData(data);

      //TODO: call redux function to store in redux
      // loginUser(data);
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
          <div>
            <div className="user-info-data">
              Signed in as: <div className="user-name"> {userData.name}</div>
            </div>
            <button onClick={onLogout} className="btn btn-info">
              Logout
            </button>
          </div>
        )}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage></HomePage>}></Route>
            {/* Use it to add nurse detail page */}
            {/* <Route
              path="/nurse/:id"
              element={<NurseDetailPage></NurseDetailPage>}
            ></Route> */}
          </Route>
          )<Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainWrapper;
