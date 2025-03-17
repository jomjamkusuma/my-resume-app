import React from "react";
import { BackgroundLines } from "../components/ui/Background-lines";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialCardAdd from "../components/TestimonialCardAdd";

interface TestimonialInfo {
  author: string;
  link: string;
  comment: string;
}

const Testimonials = () => {
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
    <div className="relative h-screen items-center justify-center">
      <BackgroundLines className="absolute w-full lg:px-70 bg-[#0b0b0b]">
        <h1 className="text-fuchsia-400 text-center text-md ">Testimonials</h1>
        <h1 className="text-white text-4xl text-center p-10">
          I have worked with these amazing people
        </h1>
        <div className="flex flex-wrap justify-center">
          {mock.map((val, i) => (
            <div key={i} className="m-4">
              <TestimonialCard
                author={val.author}
                link={val.link}
                comment={val.comment}
              />
            </div>
          ))}
          {/* <div className="m-4">
            <TestimonialCardAdd />
          </div> keep it for the future when solve the problem of svg on top of the page, it can't be clicked*/}
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Testimonials;
