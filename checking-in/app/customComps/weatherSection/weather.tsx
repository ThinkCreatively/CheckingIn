import React from "react";

const WeatherSection = () => {
  return (
    <div className="flex flex-col items-center justify-between border-2 border-yellow-900 w-full ">
      {/* TODO: make dynamic based on time EX: Good Morning/Afternoon/Evening*/}
      <div className="my-10 text-3xl">Good Morning</div>
      <div className="my-10 text-5xl">Current Weather</div>
      <div className="my-10 text-2xl">Daily Leetcode</div>
    </div>
  );
};

export default WeatherSection;
