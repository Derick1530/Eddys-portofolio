import React, { useState } from "react";

import Navbar from "../navbar";
import Hero from "../hero";
import { SliderData } from "../../data/SliderData";
import Dropdown from "../navbar/dropdown";
import Footer from "../footer";
import Services from "../serviceOffer";
import { service } from "../../data/service";
import { MainTitle } from "../../data/service";
import Testimonials from "../testimonial";
import { TestimonialData } from "../../data/testimonialsData";
import ProjectBuilt from "../projectBuilt";
import { dataImage, dataImageHome, Para } from "../../data/projectBuilt";
import HomeContent from "../homeContent";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HomeContent content={dataImageHome} />
      {/* <Navbar toggle={toggle} />
      <Hero slides={SliderData} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ProjectBuilt derick={Para} data={dataImage} />
      <Services names={service} {...MainTitle} />
      <Testimonials data={TestimonialData} />
      <Footer /> */}
    </>
  );
};

export default Home;
