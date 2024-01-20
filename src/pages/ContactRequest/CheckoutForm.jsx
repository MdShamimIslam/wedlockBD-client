import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useBio from "../../hooks/useBio";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ biodata }) => {
  const [bio] = useBio();
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: 500 }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmCardError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: bio.name || "anonymous",
            email: bio?.contact_email || "anonymous",
          },
        },
      });

    if (confirmCardError) {
      setError(confirmCardError.message);
    } 
    else {
      if (paymentIntent.status === "succeeded") {
        const contactInfo = {
          selfEmail: bio?.contact_email,
          selfBiodata_Id : bio?.biodata_id,
          selfBiodata_type : bio?.biodata_type,
          selfBiodata_status : bio?.premium_status,
          contact_email:biodata?.contact_email,
          contact_number:biodata?.contact_number,
          name: biodata?.name,
          biodata_id: biodata?.biodata_id,
          date : new Date(),
          price : 500 ,
          status: "Pending",
        };
        await axiosSecure.post("/contact-request", contactInfo);
        toast.success("Your Payment Successful!");
        navigate("/biodatas");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-10">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="name"
            >
              Biodata Id (who you need)
            </label>
            <input
              defaultValue={biodata.biodata_id}
              readOnly
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="name"
            >
              Self Biodata Id
            </label>
            <input
              defaultValue={bio.biodata_id}
              readOnly
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
            />
          </div>

          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="name"
            >
              Self Email
            </label>
            <input
              defaultValue={bio.contact_email}
              readOnly
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="">Total Fee (500tk)</h3>
          <CardElement
            className=" bg-gray-100 mt-1 p-4 rounded-lg text-white"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-purple-600 text-white w-full mt-4 px-4 py-2  rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
        >
          Submit
        </button>
        <div className="mt-4">
          <p className="text-red-600">
            <span className="font-semibold">{error}</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
