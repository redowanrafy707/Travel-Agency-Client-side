import React from "react";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactBodyOne from "./ContactBody1/ContactBodyOne";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* <ContactBanner></ContactBanner> */}
      <h1 className="text-align-center"> Contact Us </h1>
      <ContactBodyOne></ContactBodyOne>
    </div>
  );
};

export default Contact;
