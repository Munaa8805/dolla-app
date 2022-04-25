import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import SignInPage from "./pages/signin";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInPage} />
      </Switch>
    </>
  );
}

export default App;
