import React from "react";

import halfPhone from "../assets/download/halfPhone.svg";
import appleStore from '../assets/download/Apple Store.svg';
import googleStore from '../assets/download/Google Store.svg';

import Point from "./download/Point";

const Download = () => {
  return (
    <div className="flex justify-between mx-[330px] my-[110px] font-[sans-serif] text-white bg-[#5BB5A2] pt-[100px] px-[100px] rounded-xl font-medium">
      <div className="pb-[50px] max-w-[450px]">
        <div className="text-6xl font-[sans-serif]">
          <h2>One app.</h2>
          <h2>One banking.</h2>
        </div>
        <p className="my-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-7">
          <Point point={"Instant transactions"} />
          <Point point={"Payments worldwide"} />
          <Point point={"Saving accounts"} />
          <Point point={"100% mobile banking"} />
        </div>
        <button className="mr-5"><img src={appleStore} /></button>
        <button><img src={googleStore} /></button>
      </div>
      <img src={halfPhone} />
    </div>
  );
};

export default Download;
