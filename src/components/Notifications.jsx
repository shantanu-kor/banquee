import React from "react";
import { GoArrowRight } from "react-icons/go";

import Point from "./notifications/Point";
import Notification from "./notifications/Notification";

const Notifications = () => {
  return (
    <div className="flex justify-around mx-[330px] my-[110px] font-[sans-serif] font-medium">
      <div className="flex flex-col gap-[32px]">
        <p className="text-[20px]">Notifications</p>
        <h2 className="text-6xl font-[sans-serif]">Stay notified</h2>
        <p className="text-[20px] max-w-[580px] ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-col gap-[12px]">
          <Point point={"Malesuada Ipsum"} />
          <Point point={"Vestibulum"} />
          <Point point={"Parturient Lorem"} />
        </div>
        <button className="flex text-[#5BB5A2] py-2 px-3 mt-5">
          Compare Cards <GoArrowRight className="mt-[6px] mx-3" />
        </button>
      </div>
      <div className="flex flex-col gap-[16px] font-normal">
        <Notification message={"You payment of 49€ has been processed!"} />
        <Notification message={"You got a new support message!"} />
        <Notification message={"You payment was declined!"} />
        <Notification message={"Please verify your payment of 99€!"} />
        <Notification message={"New account statistics are available!"} />
      </div>
    </div>
  );
};

export default Notifications;
