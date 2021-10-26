import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
