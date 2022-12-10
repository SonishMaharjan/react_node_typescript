import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/homePage";
import LoginPage from "./components/pages/loginPage";
import NurseDetailPage from "./components/pages/nurseDetailPage";
import PageNotFound from "./components/pages/pageNotFound";

import { fakeAuth } from "./rough/mockApis";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  const [token, setToken] = React.useState<string>("");

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <HomePage
                token={token}
                onLogin={handleLogin}
                onLogout={handleLogout}
              ></HomePage>
            }
          ></Route>
          <Route
            path="/nurse/:id"
            element={<NurseDetailPage></NurseDetailPage>}
          ></Route>
        </Route>

        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
