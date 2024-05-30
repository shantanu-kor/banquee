import React from "react";
import { GoArrowRight } from "react-icons/go";

import machine from "../assets/blog/machine.png";
import girl from "../assets/blog/girl.png";
import purse from "../assets/blog/purse.png";

import Card from "./blog/Card";

const Blog = () => {
  return (
    <div className="mx-[330px] my-[110px] font-[sans-serif]">
      <div className="flex justify-between font-medium">
        <h2 className="text-6xl font-[sans-serif]">Blog</h2>
        <button className="flex text-[#5BB5A2] py-2 px-3">
          All Articles <GoArrowRight className="mt-[6px] mx-3" />
        </button>
      </div>
      <div className="flex justify-between mt-14 gap-[24px]">
        <Card
          img={machine}
          heading={"How To Start Using Banko For Your Startup"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
          }
          typ1={"Product"}
          typ2={"Technology"}
        />
        <Card
          img={girl}
          heading={"10 Things Nobody Told You About Banko"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
          }
          typ1={"Product"}
          typ2={"Technology"}
        />
        <Card
          img={purse}
          heading={"7 Ways To Improve You Saving Habits"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi."
          }
          typ1={"Product"}
          typ2={"Technology"}
        />
      </div>
    </div>
  );
};

export default Blog;
