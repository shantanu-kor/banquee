import React from "react";

import rating from "../../assets/testimonials/rating.png";

const Card = ({ title, description, name, profession }) => {
  return (
    <div className="flex flex-col gap-[24px] border-[#E8E8E8] w-[380px] border-[2px] p-[32px] rounded-[10px]">
      <div className="flex flex-col gap-[16px]">
        <img src={rating} className="w-[116px] h-[20px]" />
        <h2 className="text-[28px]">{title}</h2>
        <p className="text-[16px]">{description}</p>
      </div>
      <div>
        <p className="text-[18px]">{name}</p>
        <p className="text-[14px]">{profession}</p>
      </div>
    </div>
  );
};

export default Card;
