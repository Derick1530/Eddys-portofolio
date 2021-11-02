import React, { useState } from "react";
import Hero from "../hero";
import { SliderData } from "../../data/SliderData";
import Testimonials from "../testimonial";
import { TestimonialData } from "../../data/testimonialsData";
import Footer from "../footer";
import {
  dataGridImage,
  dataImage,
  dataImageHome,
  Para,
} from "../../data/projectBuilt";
import HomeContent from "../homeContent";
import GridImage from "../gridImage";
import NavbarActivity from "../navbar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarActivity />
      <Hero slides={SliderData} />
      <HomeContent content={dataImageHome} />
      {/* <ProjectBuilt derick={Para} data={dataImage} /> */}

      <GridImage content={dataGridImage} />
      <Testimonials data={TestimonialData} />
      <Footer />
    </>
  );
};

export default Home;
