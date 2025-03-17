import React from "react";
import { BackgroundLines } from "../components/ui/Background-lines";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="relative h-screen bg-[#0F0D14] flex items-center justify-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-[#0F0D14]">
        <h1 className="text-fuchsia-400 text-md ">Testimonials</h1>
        <h1 className="text-white text-4xl text-center p-10">
          I have worked with these amazing people
        </h1>
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          {/* TODO: make list */}
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Testimonials;
