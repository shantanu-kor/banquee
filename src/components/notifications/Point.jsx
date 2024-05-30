import React from "react";

import check from "../../assets/notifications/check.png";

const Point = ({ point }) => {
  return (
    <div className="flex gap-[16px]">
      <img src={check} />
      <p className="text-[18px]">{point}</p>
    </div>
  );
};

export default Point;
