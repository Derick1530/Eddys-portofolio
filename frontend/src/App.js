import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./globalStyles";
import "slick-carousel/slick/slick.css";
import { dataImageHome } from "./data/projectBuilt";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/about";
import { DataImage } from "./data/about";
import Gallery from "./components/gallery";
import NavbarActivity from "./components/navbar";

import Contact from "./components/contact/contact";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact">
          <Contact content={dataImageHome} />
        </Route>
        <Route path="/about">
          <About content={dataImageHome} />
        </Route>
        <Route path="/gallery">
          <Gallery content={dataImageHome} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
