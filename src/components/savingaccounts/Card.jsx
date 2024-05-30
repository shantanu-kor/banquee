import React from "react";

const Card = ({ img, name, price }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[16px]">
        <img src={img} />
        <h3 className="text-[20px]">{name}</h3>
      </div>
      <p className="text-[14px] text-[#1A191E] opacity-[50%]">{price}</p>
    </div>
  );    
};

export default Card;
