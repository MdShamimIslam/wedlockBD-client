import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PK)


const ContactRequest = () => {
  const biodata = useLoaderData();
  

  return (
    <div className="mt-12 mb-36">
      <Helmet>
        <title>Contact request | WedlockBD</title>
      </Helmet>
     <div className="w-[700px] mx-auto ">
     <Elements stripe={stripePromise}>
        <CheckoutForm biodata={biodata}></CheckoutForm>
     </Elements>
     </div>
    </div>
  );
};

export default ContactRequest;
