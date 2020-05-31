import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import {Body} from "./styles";
import UseStateExample1 from "./hooks/UseStateExample1";
import UseStateExample2 from "./hooks/UseStateExample2";
import UseEffectExample from "./hooks/UseEffectExample";
import UseCallbackExample from "./hooks/UseCallbackExample";

import { ROUTES } from "./constants";
import Nav from "./Nav";

function App() {
  return (
    <Body>
      <Router>
        <Nav />
        <Switch>
          <Route path={ROUTES.USE_STATE_1}><UseStateExample1 /></Route>
          <Route path={ROUTES.USE_STATE_2}><UseStateExample2 /></Route>
          <Route path={ROUTES.USE_STATE_2}><UseStateExample2 /></Route>
          <Route path={ROUTES.USE_EFFECT}><UseEffectExample /></Route>
          <Route path={ROUTES.USE_CALLBACK}><UseCallbackExample /></Route>
          <Route path={ROUTES.HOME}><Home /></Route>
        </Switch>
      </Router>
    </Body>
  );
}

export default App;
