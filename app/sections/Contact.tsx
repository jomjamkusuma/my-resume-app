import React from "react";

const Contact = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0 bg-[url('/contact-bg.png')] bg-center blur-md"></div>
      <div className="absolute inset-0 z-10">
        <div className="flex justify-center items-center h-screen">
          <h1>Don't hesitate to contact me</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
