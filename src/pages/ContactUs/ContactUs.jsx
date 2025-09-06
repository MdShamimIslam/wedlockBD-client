import QuickContact from './QuickContact';
import ContactFormSupport from './ContactFormSupport';
import ContactFAQ from './ContactFAQ';
import ContactOfficeLocation from './ContactOfficeLocation';
import CustomerTestimonial from './CustomerTestimonial';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {

  return (
    <>
      <Helmet>
          <title>Contact Us| WedlockBD</title>
      </Helmet>
      <QuickContact/>
      <ContactFormSupport/>
      <ContactFAQ/>
      <ContactOfficeLocation/>
      <CustomerTestimonial/>
    </>
  );
};

export default ContactUs;