import React from "react";
import { GoArrowRight } from "react-icons/go";

import laptop from '../assets/savingaccounts/laptop.svg';
import bike from '../assets/savingaccounts/bike.svg';
import holiday from '../assets/savingaccounts/holiday.svg';
import camera from '../assets/savingaccounts/camera.svg';
import add from '../assets/savingaccounts/add.svg';

import Card from "./savingaccounts/Card";

const SavingAccounts = () => {
  return (
    <div className="flex flex-col gap-[64px] mx-[350px] my-[110px] font-[sans-serif] font-medium">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[16px] max-w-[600px]">
          <p className="text-[20px]">Saving Accounts</p>
          <div className="text-6xl font-[sans-serif]">
            <h2>Organize your</h2>
            <h2>money the right way</h2>
          </div>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button className="flex text-[#5BB5A2] py-2 px-3 mt-5">
          All Features <GoArrowRight className="mt-[6px] mx-3" />
        </button>
      </div>
      <div className="flex gap-[33px]">
        <Card img={laptop} name={"New Laptop"} price={"400$"} />
        <Card img={bike} name={"Dream bike"} price={"200$"} />
        <Card img={holiday} name={"Holiday"} price={"14000$"} />
        <Card img={camera} name={"Camera"} price={"100$"} />
        <Card img={add} />
      </div>
    </div>
  );
};

export default SavingAccounts;
