import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./globalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>h
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
