"use client";
import React from "react";
import { motion } from "framer-motion";

const Interlude = () => {
  return (
    <div className="flex h-screen bg-[url('/landing-background.svg')] bg-cover bg-bottom justify-center items-center">
      <div>
        <h1 className="text-5xl text-white font-bold text-center">
          I just need a new job
        </h1>
        <h1 className="text-5xl text-white font-bold text-center pt-4">
          by making this website looks{" "}
          <span className="font-['Pattaya']! text-6xl">cool</span>
        </h1>
        <div className="flex justify-center items-center text-xl text-center">
          <span>Hello, I’m Kusuma Jomjam</span>
          <motion.button
            whileHover={{ scale: 1.2, rotate: -30 }}
            className="h-20 w-20 bg-[url('/kusuma-profile.png')] bg-contain border-1 rounded-full m-4"
          ></motion.button>
          <motion.div className="" />
          <span>a Software Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Interlude;
