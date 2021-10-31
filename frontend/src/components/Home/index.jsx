import React, { useState } from "react";
import Hero from "../hero";
import { SliderData } from "../../data/SliderData";
import Services from "../serviceOffer";
import { service } from "../../data/service";
import { MainTitle } from "../../data/service";
import Testimonials from "../testimonial";
import { TestimonialData } from "../../data/testimonialsData";
import ProjectBuilt from "../projectBuilt";
import {
  dataGridImage,
  dataImage,
  dataImageHome,
  Para,
} from "../../data/projectBuilt";
import HomeContent from "../homeContent";
import GridImage from "../gridImage";
import Gallery from "../gallery/index";
import Contact from "../contact";
import NavbarActivity from "../navbar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Gallery /> */}
      <NavbarActivity />
      <Hero slides={SliderData} />
      <HomeContent content={dataImageHome} />
      {/* <ProjectBuilt derick={Para} data={dataImage} /> */}
      <Services names={service} {...MainTitle} />
      <GridImage content={dataGridImage} />
      <Testimonials data={TestimonialData} />
      <Contact />
    </>
  );
};

export default Home;
