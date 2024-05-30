import React from "react";

const List = ({ heading, but1, but2, but3 }) => {
  return (
    <div className="grid grid-cols-1">
      <div className="font-medium py-7">{heading}</div>
      <div className="flex flex-col text-gray-500">
        <button className="text-left my-1">{but1}</button>
        <button className="text-left my-1">{but2}</button>
        <button className="text-left my-1">{but3}</button>
      </div>
    </div>
  );
};

export default List;
