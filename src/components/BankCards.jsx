import React from "react";
import { GoArrowRight } from "react-icons/go";

import cards from "../assets/cards.png";

const BankCards = () => {
  return (
    <div className="flex flex-col justify-between font-[sans-serif] bg-blue-100">
      <div className="py-14 text-center font-medium">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-[20px]">Features</div>
            <div className="py-5 text-[80px]">
              All in one Card.
            </div>
            <div className="text-[20px] w-[500px] mx-auto">
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </div>
          </div>
          <div className="flex justify-center gap-4 text-[20px]">
            <button className="bg-[#5BB5A2] rounded py-2 px-3 text-white">
              Open Account
            </button>
            <button className="flex text-[#5BB5A2] py-2 px-3">
              Compare Cards <GoArrowRight className="mt-[6px] mx-2" />
            </button>
          </div>
        </div>
      </div>
      <img src={cards} />
    </div>
  );
};

export default BankCards;
