import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/ThreeDCard";
import Link from "next/link";
import Image from "next/image";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const Projects = () => {
  return (
    <div className="py-5">
      <div className="justify-center text-center">
        <h1 className="text-xl">My recent</h1>
        <h1 className="text-5xl [text-shadow:_0_4px_20px_rgb(253_255_210_/_0.8)]">
          Project
        </h1>
      </div>
      {contents.map((contents, index) => (
        <div
          key={index}
          className="flex flex-wrap px-4 justify-center items-center"
        >
          <CardContainer className="py-10 justify-center">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {contents.webTitle}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {contents.webDescription}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={contents.webImg}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://jomjamkusuma.github.io/simon-game/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://github.com/jomjamkusuma/simon-game"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Github
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <div className="lg:px-10 w-96">
            <h1 className="text-xl">{contents.tile}</h1>
            <p className="py-4 text-gray-400">{contents.description}</p>
            <div className="md:pl-10">
              <ul>
                {contents.bullet.map((item, index) => (
                  <li key={index} className="flex py-1 items-center">
                    <AutoFixHighIcon sx={{ color: "#ff6a6a" }} />
                    <p className="md:pl-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

const contents = [
  {
    webTitle: "Simon",
    webDescription:
      "The Simon Game is an electronic memory game that challenges players to remember and repeat a sequence of colors and sounds. It was first introduced by Milton Bradley in 1978 and has since become a classic",
    webImg: "/works-simon-games.png",
    tile: "First Step",
    description:
      "This is my very first web application, which I built while learning full-stack web development using JavaScript and jQuery.",
    bullet: [
      "Imported sound audio that user will have an interactive while playing",
      "Improved user experience with color and error sound, fun to play",
    ],
  },
  {
    webTitle: "Simon",
    webDescription:
      "The Simon Game is an electronic memory game that challenges players to remember and repeat a sequence of colors and sounds. It was first introduced by Milton Bradley in 1978 and has since become a classic",
    webImg: "/works-simon-games.png",
    tile: "First Step",
    description:
      "This is my very first web application, which I built while learning full-stack web development using JavaScript and jQuery.",
    bullet: [
      "Import sound audio that user will have an interactive while playing",
      "Incididunt amet enim nulla nostrud in.",
    ],
  },
];
