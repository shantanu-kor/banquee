import React from "react";

const Card = ({ img, heading1, heading2, content }) => {
  return (
    <div className="p-[32px] border-[2px] max-w-[284px] max-h-[264px] rounded-[16px]">
      <img src={img} />
      <div className="text-[20px]">
        <h2>{heading1}</h2>
        <h2>{heading2}</h2>
      </div>
      <p className="text-[16px]">{content}</p>
    </div>
  );
};

export default Card;
