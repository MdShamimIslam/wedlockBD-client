import React from "react";
import { Helmet } from "react-helmet-async";
import useBio from "../../hooks/useBio";

const ContactUs = () => {
  const [bio] = useBio();
  console.log(bio);
  return (
    <div>
      <Helmet>
        <title>Contact Us | WedlockBD</title>
      </Helmet>
     <h2> Contact Us : {bio.weight}</h2>
    </div>
  );
};

export default ContactUs;
