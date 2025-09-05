import { Slider } from "../Slider/Slider";
import { Helmet } from "react-helmet-async";
import WebWork from "../WebWork/WebWork";
import PremiumBio from "./PremiumBio/PremiumBio";
import SuccessStory from "../SuccessStory/SuccessStory";
import Counter from "../Counter/Counter";

const Home = () => {
  return (
    <>
      <Helmet> <title>Home | WedlockBD</title></Helmet>
      <Slider/>
      <PremiumBio/>
      <WebWork/>
      <Counter/>
      <SuccessStory/>
    </>
  );
};

export default Home;
