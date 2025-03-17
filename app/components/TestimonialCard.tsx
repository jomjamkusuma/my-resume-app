import Link from "next/link";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TestimonialCard = ({
  comment,
  author,
  link,
}: {
  comment: string;
  author: string;
  link: string;
}) => {
  return (
    <div>
      <div className="w-60 bg-white rounded-3xl p-4">
        <p className="text-sm font-['Helvetica'] font-light text-gray-500 pb-1">
          “{comment}”
        </p>
        <div className="flex justify-start">
          <AccountCircleIcon sx={{ fontSize: 50 }} />
          <div className="ml-2">
            <p className="text-black">{author}</p>
            <Link
              href={link}
              target="_blanks"
              className="cursor-pointer text-gray-400"
            >
              @{author}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
