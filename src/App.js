import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
//routes
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Result } from "./Result";
import "./App.css";

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/step4" component={Step4} />
          <Route path="/result" component={Result} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
