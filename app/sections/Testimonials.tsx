import React from "react";
import { BackgroundLines } from "../components/ui/Background-lines";
import TestimonialCard from "../components/TestimonialCard";
import { div } from "motion/react-client";

const Testimonials = () => {
  const card = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative h-screen flex items-center justify-center">
      <BackgroundLines className="absolute w-full flex-col lg:px-70 bg-[#0F0D14]">
        <h1 className="text-fuchsia-400 text-center text-md ">Testimonials</h1>
        <h1 className="text-white text-4xl text-center p-10">
          I have worked with these amazing people
        </h1>
        <div className="flex flex-wrap justify-center">
          {card.map((val) => (
            <div className="m-4">
              <TestimonialCard />
            </div>
          ))}
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Testimonials;
