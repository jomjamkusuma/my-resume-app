"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonSlide from "../components/ButtonSlide";

const Interlude = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-[url('/landing-background.svg')] bg-cover bg-bottom justify-center items-center">
        <div>
          <h1 className="md:text-5xl text-white font-bold text-center">
            I just need a new job
          </h1>
          <h1 className="text-5xl text-white font-bold text-center pt-4">
            by making this website looks{" "}
            <span className="font-['Pattaya']! text-6xl">cool</span>
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center text-xl text-center">
            <span>Hello, I’m Kusuma Jomjam</span>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -30 }}
              className="h-20 w-20 bg-[url('/kusuma-profile.png')] bg-cover bg-center border-1 rounded-full m-4"
            />
            <motion.div className="" />
            <span>a Software Engineer</span>
          </div>
        </div>
        <div>
          <ButtonSlide text="Resume" icon="download" />
          <ButtonSlide text="Resume" icon="download" />
        </div>
      </div>
      <div className="justify-center"></div>
    </>
  );
};

export default Interlude;
