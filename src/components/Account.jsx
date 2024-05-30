import React from "react";

import cards from "../assets/account/cards.png";

const Account = () => {
  return (
    <div className="flex flex-col text-center gap-[56px] w-[800px] mx-auto pt-[160px] font-medium font-[sans-serif]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[20px]">Account</p>
          <div className="text-6xl font-[sans-serif] text-center">
            <h2>Perfect card</h2>
            <h2>for your needs</h2>
          </div>
        </div>
        <p className="text-[20px] w-[500px] mx-auto">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      <img src={cards} className="w-[500px] h-[500px] mx-auto" />
      <div className="flex justify-center gap-[16px]">
        <button className="bg-[#5BB5A2] w-[166px] h-[50px] rounded-[6px] px-[24px] py-[16px]">
          Open Account
        </button>
        <button className="border-[#E8E8E8] border-[2px] w-[176px] h-[50px] rounded-[6px] px-[24px] py-[16px]">
          Compare Cards
        </button>
      </div>
    </div>
  );
};

export default Account;
