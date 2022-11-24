import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTER } from "./consts";
import Home from "../components/Home";
import Form from "../components/Input";
import Table from "../components/Table";
import { useState } from "react";

function Routes() {
  const [inputsValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    age: "",
    userStatus: "",
  });
  const [isShowResult, setIsShownResult] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.PATH} exact>
          <Home />
        </Route>

        <Route path={ROUTER.USER.PATH}>
          <Form
            inputsValue={inputsValue}
            setInputsValue={setInputValue}
            setIsShowResult={setIsShownResult}
          />
        </Route>
        <>
          <Route path={ROUTER.USER.DETAILS}>
            <Table />
          </Route>
        </>
      </Switch>
    </Router>
  );
}

export default Routes;
