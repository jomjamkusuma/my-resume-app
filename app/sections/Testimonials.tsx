"use client";
import React from "react";
import { BackgroundLines } from "../components/ui/BackgroundLines";
import TestimonialCard from "../components/TestimonialCard";
import useIsLargeScreen from "../../lib/calculator";

interface TestimonialInfo {
  author: string;
  link: string;
  comment: string;
}

const Testimonials = () => {
  const { isLargeScreen } = useIsLargeScreen();
  let mock: TestimonialInfo[] = [
    {
      author: "Jonh Doe",
      link: "https://stackoverflow.com/",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at vulputate turpis. In ante mauris, suscipit non dapibus venenatis, tempus ac lac",
    },
    {
      author: "Jonh Doe",
      link: "https://stackoverflow.com/",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at vulputate turpis. In ante mauris, suscipit non dapibus venenatis, tempus ac lac",
    },
    {
      author: "Jonh Doe",
      link: "https://stackoverflow.com/",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at vulputate turpis. In ante mauris, suscipit non dapibus venenatis, tempus ac lac",
    },
    {
      author: "Jonh Doe",
      link: "https://stackoverflow.com/",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at vulputate turpis. In ante mauris, suscipit non dapibus venenatis, tempus ac lac",
    },
    {
      author: "Jonh Doe",
      link: "https://stackoverflow.com/",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at vulputate turpis. In ante mauris, suscipit non dapibus venenatis, tempus ac lac",
    },
  ];
  return (
    <div className="h-screen">
      <div className="relative">
        <BackgroundLines className="absolute w-full inset-0 z-">
          <div></div>
          <h1 className="text-fuchsia-400 text-center text-xl ">
            Testimonials
          </h1>
          <h1 className="text-white text-4xl text-center p-10">
            I have worked with these amazing people
          </h1>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 2xl:px-120">
            {isLargeScreen
              ? mock.map((val, i) => (
                  <div key={i}>
                    <TestimonialCard
                      author={val.author}
                      link={val.link}
                      comment={val.comment}
                    />
                  </div>
                ))
              : mock.slice(0, 2).map((val, i) => (
                  <div key={i}>
                    <TestimonialCard
                      author={val.author}
                      link={val.link}
                      comment={val.comment}
                    />
                  </div>
                ))}
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default Testimonials;
