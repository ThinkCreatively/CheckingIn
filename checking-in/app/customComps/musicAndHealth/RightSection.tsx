import React from "react";
import Music from "./Music";
import Health from "./Health";

const RightSection = () => {
  return (
    <div className="flex justify-center border-2 border-yellow-900 w-full">
      <Music />
      <Health />
    </div>
  );
};

export default RightSection;
