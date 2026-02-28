import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
  <main className="container mx-auto max-width section py-12 px-4">
  <div className="text-center mb-12">
    <h1 className="text-2xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold tracking-tight">
      Get in touch
    </h1>
    <p className="text-content mt-2 text-lg">We're here to help with any questions.</p>
  </div>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
    <div className="text-center group">
      <p className="text-xs uppercase tracking-[0.2em] text-content mb-3 font-semibold">Email</p>
      <a 
        href={`mailto:${email}`} 
        className="text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {email}
      </a>
    </div>

    <div className="hidden md:block h-12 w-px bg-gray-200 dark:bg-gray-800"></div>

    <div className="text-center group">
      <p className="text-xs uppercase tracking-[0.2em] text-content mb-3 font-semibold">Phone</p>
      <a 
        href={`tel:${phone}`} 
        className="text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {phone}
      </a>
    </div>
  </div>
</main>
  );
}

export default Contact;
