import React from "react";
import ButtonSlide from "../components/Button-slide";

const Contact = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 bg-[url('/contact-bg.png')] bg-center blur-lg"></div>
      <div className="absolute inset-0 z-10">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-5xl font-['Pattaya']">Now it's your time</h1>
          <h1 className="text-5xl pb-8">Don't hesitate to contact me</h1>
          <ButtonSlide text="Email me" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
