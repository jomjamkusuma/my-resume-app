import Link from "next/link";
import React from "react";

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
        {/* <div className="w-full border-t border-gray-400 py-1"></div> */}
        <div className="flex items-center m-2">
          <div className="rounded-full w-10 h-10 bg-gray-400 mr-3"></div>
          <div className="flex-row">
            <p className="text-black">{author}</p>
            <div>
              <Link
                href={link}
                target="_blanks"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-400"
              >
                @{author}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
