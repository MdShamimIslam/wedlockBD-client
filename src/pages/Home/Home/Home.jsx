import React from "react";
import { Slider } from "../Slider/Slider";
import { Helmet } from "react-helmet-async";
import Biodatas from "../../Biodatas/Biodatas";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | WedlockBD</title>
      </Helmet>
      <Slider></Slider>
      <Biodatas></Biodatas>
    </div>
  );
};

export default Home;
