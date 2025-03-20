"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavBarCursorProps {
  left: number;
  width: number;
  opacity: number;
}
const NavigationBar = () => {
  const [position, setPosition] = React.useState<NavBarCursorProps>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="fixed z-10 top-10 left-0 right-0"
    >
      <ul className="mx-auto flex w-fit rounded-full backdrop-blur-lg border-1 border-white/10 bg-white/5 p-1">
        <Tab setPosition={setPosition}>Home</Tab>
        <Tab setPosition={setPosition}>Work</Tab>
        <Tab setPosition={setPosition}>About</Tab>
        <Tab setPosition={setPosition}>Contact</Tab>
        <Cursor position={position} />
      </ul>
    </div>
  );
};

export default NavigationBar;

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<NavBarCursorProps>>;
}) => {
  const ref = React.useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative block px-3 py-1.5 text-xs uppercase text-white font-['Helvetica'] font-extralight"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: NavBarCursorProps }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 bg-white/10 rounded-full"
    />
  );
};
