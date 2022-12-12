import React, { useEffect } from "react";

import jwtDecode from "jwt-decode";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/homePage";
import LoginPage from "./components/pages/loginPage";
import NurseDetailPage from "./components/pages/nurseDetailPage";
import PageNotFound from "./components/pages/pageNotFound";

import { Provider } from "react-redux";
import { store } from "./state";

import "./App.css";
import Alert from "./components/alert";
// import { redirectTo } from "./utils";

import MainWrapper from "./components/MainWrapper";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Provider store={store}>
      <>
        <Alert></Alert>
        <MainWrapper></MainWrapper>
      </>
    </Provider>
  );
};

export default App;
