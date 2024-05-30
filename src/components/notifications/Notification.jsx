import React from "react";

import appIcon from "../../assets/notifications/app-icon.png";

const Notification = ({ message }) => {
  return (
    <div className="p-[16px] flex gap-[16px] bg-[#F8F8F8] rounded-[10px] w-[500px]">
      <img src={appIcon} />
      <div className="flex flex-col gap-[4px]">
        <p className="text-[20px] font-medium">Banko.</p>
        <p className="text-[16px]">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
