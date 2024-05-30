import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import List from "./footer/List";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between py-14 mx-[100px] font-[sans-serif]">
        <div className="text-3xl font-bold text-[#5BB5A2] mt-5">banquee.</div>
        <div className="flex mx-[100px] gap-64">
          <List heading={"About"} but1={"Features"} but2={"Pricing"} but3={"Support"} />
          <List heading={"Blog"} but1={"Products"} but2={"Technology"} but3={"Crypto"} />
          <List heading={"Webflow"} but1={"Styleguide"} but2={"Licensing"} but3={"Changelog"} />
          <List heading={"Social Media"} but1={"Twitter"} but2={"Facebook"} but3={"Instagram"} />
        </div>
      </div>
      <div className="flex justify-between mx-[100px] mb-10">
        <div className="flex gap-1">
          <FaRegCopyright className="mx-1 mt-1" />
          <span>Made by </span>
          <span className="text-[#5BB5A2] hover:cursor-pointer">
            Pawel Gola -{" "}
          </span>
          <span>Powered by </span>
          <span className="text-[#5BB5A2] hover:cursor-pointer">Webflow</span>
        </div>
        <div className="flex justify-center gap-6">
          <span>Impressum</span>
          <span>Datenschutz</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
