import React from "react";

const Card = ({ img, heading, description, typ1, typ2 }) => {
  return (
    <div className="flex flex-col hover:cursor-pointer max-w-[378px]">
      <img src={img} />
      <div className="text-[26px]">{heading}</div>
      <div className="text-[17px]">{description}</div>
      <div className="mt-2">
        <span className="mr-2 p-1 bg-gray-100 rounded text-[13px]">{typ1}</span>
        <span className="p-1 bg-gray-100 rounded text-[13px]">{typ2}</span>
      </div>
    </div>
  );
};

export default Card;
