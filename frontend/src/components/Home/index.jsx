import React, { useState } from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import { SliderData } from "../../data/SliderData";
import Dropdown from "../navbar/dropdown";
import InfoSection from "../infoSection";
import { infoData } from "../../data/infoData";
import Footer from "../footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Hero slides={SliderData} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <InfoSection {...infoData} />
      <Footer />
    </>
  );
};

export default Home;
