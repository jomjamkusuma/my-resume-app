import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const TestimonialCardAdd = () => {
  return (
    <div>
      <div className="w-60 bg-white rounded-3xl p-4">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>

        <div className="flex justify-center mb-4">
          <AddCircleRoundedIcon sx={{ fontSize: 50 }} />
        </div>

        <div className="flex items-center">
          <div className="rounded-full w-10 h-10 bg-gray-200 mr-3"></div>
          <div className="flex-row">
            <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
            <div className="w-Name48 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardAdd;
