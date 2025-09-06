import { Helmet } from 'react-helmet-async';
import Story from './Story';
import Features from './Features';
import Values from './Values';
import Team from './Team';
import Timeline from './Timeline';
import Awards from './Awards';
import Stats from './Stats';
import CallToAction from './CallToAction';

const AboutUs = () => {

  return (
    <>
      <Helmet>
          <title>About Us| WedlockBD</title>
      </Helmet>
      <Story/>
      <Features/>
      <Values/>
      <Team/>
      <Timeline/>
      <Awards/>
      <Stats/>
      <CallToAction/>

    </>
  );
};

export default AboutUs;