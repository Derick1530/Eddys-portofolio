import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/about";
import { DataImage } from "./data/about";
import Gallery from "./components/gallery";
import NavbarActivity from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about">
          <About data={DataImage} />
        </Route>
        <Route path="/gallery" component={Gallery} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
