import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ContactRequest = () => {
  const biodata = useLoaderData();
  console.log(biodata);
  return (
    <div className="mt-12 mb-36">
      <Helmet>
        <title>Contact request | WedlockBD</title>
      </Helmet>
      contact request form here
    </div>
  );
};

export default ContactRequest;
