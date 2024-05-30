import React from "react";

import phone from "../assets/overview/phone.svg";
import instant from "../assets/overview/instant.png";
import saving from "../assets/overview/saving.png";
import mobile from "../assets/overview/mobile.png";
import advanced from "../assets/overview/advanced.png";
import virtual from "../assets/overview/virtual.png";
import contactless from "../assets/overview/contactless.png";

import Card from "./overview/Card";

const OverView = () => {
  return (
    <div className="flex justify-between items-start mx-[330px] my-[110px] font-[sans-serif] font-medium">
      <div className="flex flex-col gap-[64px]">
        <div className="text-6xl font-[sans-serif]">
          <h2>One app.</h2>
          <h2>One banking.</h2>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-[32px]">
          <Card
            img={instant}
            heading1={"Instant"}
            heading2={"transactions"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
          <Card
            img={saving}
            heading1={"Saving"}
            heading2={"accounts"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
          <Card
            img={mobile}
            heading1={"Mobile"}
            heading2={"banking"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
          <Card
            img={advanced}
            heading1={"Advanced"}
            heading2={"statistics"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
          <Card
            img={virtual}
            heading1={"Virtual"}
            heading2={"cards"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
          <Card
            img={contactless}
            heading1={"Contactless"}
            heading2={"payments"}
            content={
              "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
            }
          />
        </div>
      </div>
      <img src={phone} className="mr-14" />
    </div>
  );
};

export default OverView;
