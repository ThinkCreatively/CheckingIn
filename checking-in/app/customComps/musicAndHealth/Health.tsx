import React from "react";

const Health = () => {
  const dailyWorkouts = ["100 Pushups", "100 Situps", "Run 10 minutes"];
  return (
    <div className="flex flex-col border-2 border-red-500 h-full items-center justify-evenly">
      <div className="border-2 border-blue-500 text-center text-3xl">
        Daily Goals
      </div>
      {dailyWorkouts.map((item, index) => (
        <div
          key={index}
          className="border-2 border-blue-500 text-center text-2xl w-1/2"
        >
          {item}
        </div>
      ))}
      <div className="border-2 border-blue-500 text-center text-2xl w-1/2 align-center">
        Detailed View
      </div>
    </div>
  );
};

export default Health;
