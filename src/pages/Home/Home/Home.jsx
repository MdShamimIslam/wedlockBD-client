import React from "react";
import { Slider } from "../Slider/Slider";
import { Helmet } from "react-helmet-async";
import WebWork from "../WebWork/WebWork";
import PremiumBio from "./PremiumBio/PremiumBio";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | WedlockBD</title>
      </Helmet>
      <Slider></Slider>
      <PremiumBio></PremiumBio>
      <WebWork></WebWork>
    </div>
  );
};

export default Home;
