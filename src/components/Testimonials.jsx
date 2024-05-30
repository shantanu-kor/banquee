import React from "react";

import star from "../assets/testimonials/star.png";
import Card from "./testimonials/Card";

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-[330px] my-[110px] gap-[64px] font-medium font-[sans-serif]">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[16px]">
          <p className="text-[20px]">Testimonials</p>
          <h2 className="text-6xl w-[600px]">
            People all over the world use banko.
          </h2>
        </div>
        <div className="flex gap-[16px]">
          <img src={star} />
          <p className="my-auto text-[18px]">
            Rated <span className="text-blue-400">4.8/5</span> from over 1000
            users
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
        <Card
          title={"Sunt qui esse pariatur duis deserunt mollit"}
          description={
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
          }
          name={"Cody Fisher"}
          profession={"Medical Assistant"}
        />
        <Card
          title={"At lectus urna duis convallis tellus"}
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
              <br />
              <br />
              In nibh mauris cursus mattis. At lectus urna duis convallis
              convallis tellus. Enim blandit volutpat maecenas volutpat.
            </p>
          }
          name={"Jenny Wilson"}
          profession={"Nursing Assistant"}
        />
        <Card
          title={"Elit aute irure tempor cupidatat incididunt"}
          description={
            "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
          }
          name={"Guy Hawkins"}
          profession={"President of Sales"}
        />
        <Card
          title={"Sunt qui esse pariatur duis deserunt mollit "}
          description={
            "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
          }
          name={"Cody Fisher"}
          profession={"Medical Assistant"}
        />
        <Card
          title={"Donec et fringilla neque"}
          description={
            "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum."
          }
          name={"Darlene Robertson"}
          profession={"Dog Trainer"}
        />
        <Card
          title={"Etiam accumsan porta neque eros"}
          description={
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          }
          name={"Dianne Russell"}
          profession={"Medical Assistant"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
