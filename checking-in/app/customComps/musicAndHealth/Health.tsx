import React from "react";

const Health = () => {
  const dailyWorkouts = ["100 Pushups", "100 Situps", "Run 10 minutes"];
  return (
    <div className="border-2 border-red-500 h-full items-center">
      <div className="border-2 border-blue-500 text-center text-3xl">
        Daily Goals
      </div>
      {dailyWorkouts.map((item, index) => (
        <div
          key={index}
          className="border-2 border-blue-500 text-center text-xl"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Health;
