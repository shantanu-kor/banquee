import React from "react";
import { GoArrowRight } from "react-icons/go";

import Contact from "./help/Contact";
import phone from "../assets/help/phone.png";
import email from "../assets/help/email.png";
import Question from "./help/Question";

const Help = () => {
  return (
    <div className="flex justify-between mx-[330px] my-[110px] font-[sans-serif]">
      <div className="flex flex-col">
        <h2 className="text-6xl font-[sans-serif] mb-14">Need Help?</h2>
        <Contact
          img={phone}
          contact={"+49 176 123 456"}
          title={"Support Hotline"}
        />
        <Contact
          img={email}
          contact={"help@banquee.com"}
          title={"Support Email"}
        />
        <button className="flex text-[#5BB5A2] py-2 px-3 mt-5">
          Support <GoArrowRight className="mt-[6px] mx-3" />
        </button>
      </div>
      <div className="flex flex-col">
        <Question
          question={"How do I open an Banko account?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient."
          }
        />
        <Question
          question={"How do I order a new card?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient."
          }
        />
        <Question
          question={"How to change my account limits?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient."
          }
        />
        <Question
          question={"How does Banko premium works?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient."
          }
        />
        <Question
          question={"Can I have two Banko accounts?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient."
          }
        />
      </div>
    </div>
  );
};

export default Help;
