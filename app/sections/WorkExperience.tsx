"use client";
import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { ColourfulText } from "../components/ui/colourful-text";

const WorkExperience = () => {
  const colors = [
    "rgb(47, 195, 106)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(230, 64, 92)",
    "rgb(249, 129, 47)",
  ];

  return (
    <div>
      <div className="flex justify-center pt-5 pb-10">
        <h1 className="text-5xl font-bold text-center">
          Crafting <ColourfulText text="seamless" /> apps with <br />
          Work Experience
        </h1>
      </div>
      <div className="flex justify-center px-10">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {dummyContent.map((data, index) => (
            <li
              key={index}
              className={`${index != dummyContent.length - 1 && "mb-10"} ms-6`}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white">
                <img src={`${data.image}`} alt="Avatar" className="w-6 h-6" />
              </span>
              <div className="pl-2">
                <h4 className="text-lg font-bold text-white z-2">
                  {data.company}
                </h4>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {data.title}
                  {index == 0 && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  )}
                </h3>
                <time className="block mb-2 text-sm font-['Helvetica'] font-normal italic leading-none text-gray-400 dark:text-gray-500">
                  {data.duration}
                </time>
                {data.description.map((desc, index) => (
                  <p key={index} className="text-base font-normal">
                    <RemoveRoundedIcon sx={{ color: `${colors[index]}` }} />{" "}
                    {desc}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;

const dummyContent = [
  {
    company: "Pi Securities",
    title: "Software Engineer",
    duration: "October 2022 - Current",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "Pellentesque laoreet elit vulputate",
      "sapien hendrerit commodo. Morbi tincidunt",
      " Get started with dozens of web components",
    ],

    image: "/logo-pi.png",
  },
  {
    company: "KBTG",
    title: "Software Engineer",
    duration: "October 2022 - Current",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "Pellentesque laoreet elit vulputate",
      "sapien hendrerit commodo. Morbi tincidunt",
      "erat et libero volutpat lacinia. In quis",
    ],
    image: "/logo-kbtg.jpg",
  },
  {
    company: "Tamago Finance",
    title: "Frontend Web Developer",
    duration: "Part-time",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "Pellentesque laoreet elit vulputate",
      "sapien hendrerit commodo. Morbi tincidunt",
      "erat et libero volutpat lacinia. In quis",
    ],
    image: "/logo-tamago.jpg",
  },
];
