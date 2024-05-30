import React from "react";
import webflow from "../assets/tools/webflow.svg";
import shopify from "../assets/tools/shopify.svg";
import zapier from "../assets/tools/zapier.svg";
import bitcoin from "../assets/tools/bitcoin.svg";
import paypal from "../assets/tools/paypal.svg";
import mastercard from "../assets/tools/mastercard.svg";
import visa from "../assets/tools/visa.svg";
import gpay from "../assets/tools/gpay.svg";
import apay from "../assets/tools/apay.svg";
import amazonpay from "../assets/tools/amazonpay.svg";
import Point from "./tools/Point";

const Tools = () => {
  return (
    <div className="flex flex-col gap-[64px] mx-[330px] my-[110px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[16px]">
          <img src={webflow} />
          <img src={shopify} />
          <img src={zapier} />
          <img src={bitcoin} />
        </div>
        <div className="flex gap-[16px]">
          <img src={paypal} />
          <img src={mastercard} />
          <img src={visa} />
          <img src={gpay} />
          <img src={apay} />
          <img src={amazonpay} />
        </div>
      </div>
      <div className="flex gap-[163px] items-end font-[sans-serif]">
        <div className="flex flex-col gap-[24px] font-medium">
          <p className="text-[20px]">Tools</p>
          <h2 className="text-6xl font-[sans-serif] w-[540px]">
            Seemless integration
          </h2>
          <p className="text-[18px] max-w-[540px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
            <Point point={"Secure and encrypted integration"} />
            <Point point={"Fully API interface"} />
            <Point point={"Payments worldwide"} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
