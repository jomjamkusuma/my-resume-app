import React from "react";

const TestimonialCard = () => {
  return (
    <div>
      <div className="w-60 bg-white rounded-3xl p-4">
        <p className="text-sm font-['Helvetica'] font-light text-gray-500 pb-1">
          “Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus
          nihil. Aut enim doloremque et ipsam.”
        </p>
        <div className="w-full border-t border-gray-400 py-1"></div>
        <div className="flex items-center">
          <div className="rounded-full w-10 h-10 bg-gray-400 mr-3"></div>
          <div className="flex-row">
            <p className="text-black">John Doe</p>
            <p className="text-sm text-gray-500">@John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
