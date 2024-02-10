import React from "react";
import { Slider } from "../Slider/Slider";
import { Helmet } from "react-helmet-async";
import WebWork from "../WebWork/WebWork";
import PremiumBio from "./PremiumBio/PremiumBio";
import SuccessStory from "../SuccessStory/SuccessStory";
import Counter from "../Counter/Counter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | WedlockBD</title>
      </Helmet>
      <Slider></Slider>
      <PremiumBio></PremiumBio>
      <WebWork></WebWork>
      <Counter></Counter>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
