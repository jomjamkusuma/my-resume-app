"use client";
import React, { ReactNode } from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import TrendingFlatSharpIcon from "@mui/icons-material/TrendingFlatSharp";

const ButtonSlide = ({
  text,
  icon,
}: {
  text: string;
  icon: "download" | "next";
}) => {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("show");

  console.log(showModal);
  return (
    <>
      <Link href="" scroll={false}>
        <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950/5 border-1 border-white/20 py-1 pl-6 pr-14 font-medium text-neutral-50">
          <span className="z-2 pr-2">{text}</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700/50 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3 flex items-center justify-center">
              {icon == "download" && <DownloadSharpIcon />}
              {icon == "next" && <TrendingFlatSharpIcon />}
            </div>
          </div>
        </button>
      </Link>
      {/* {showModal && <EmailForm />} */}
    </>
  );
};

export default ButtonSlide;
