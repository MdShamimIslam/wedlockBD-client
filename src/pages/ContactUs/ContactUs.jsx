import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_wdwylgn";
    const templateId = "template_vksbqsj";
    const publicKey = "slljjTZw_AUfrVERR";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        if (result.text === "OK") {
          toast.success("Message send successfully");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="w-3/4 mx-auto my-24">
      <Helmet>
        <title> Contact Us| WedlockBD</title>
      </Helmet>
      <h5 className=" text-center mb-10 mx-auto text-2xl font-semibold">
        If you are interested in knowing something.Then you can email us with
        your name, email and your message.You can also chat with us directly
        from our website.
      </h5>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex gap-6">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
              Your Name
            </label>
            <input
              required
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              name="from_name"
              placeholder="Enter your name"
              type="text"
            />
          </div>

          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
              Your email
            </label>
            <input
              required
              name="from_email"
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
            htmlFor="number"
          >
            Message
          </label>
          <textarea
            required
            className="flex resize-none h-36 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
            placeholder="Type your message..."
            type="text"
            name="message"
          />
        </div>
        <div className="flex items-center justify-center mt-8">
          <input
            className="bg-gray-900 cursor-pointer text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
