import React from "react";

import transactions from "../assets/transactions.png";
import Point from "./sendandreceive/Point";

const SendAndReceive = () => {
  return (
    <div className="flex justify-around bg-[#E8F2EE] px-[128px] pt-[100px] font-[sans-serif] font-medium">
      <div className="flex flex-col gap-[32px]">
        <div className="text-6xl font-[sans-serif]">
          <h2>Send & receive</h2>
          <h2>money instantly</h2>
        </div>
        <p className="text-[20px] max-w-[530px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
        <div className="flex flex-col gap-[12px]">
            <Point point={"Malesuada Ipsum"} />
            <Point point={"Vestibulum"} />
            <Point point={"Parturient Lorem"} />
        </div>
      </div>
      <img src={transactions} />
    </div>
  );
};

export default SendAndReceive;
