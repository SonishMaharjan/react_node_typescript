import { Provider } from "react-redux";
import { store } from "./state";

import "./App.css";
import Alert from "./components/alert";

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
