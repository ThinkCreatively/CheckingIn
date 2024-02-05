import React from "react";

const ArticleSection = () => {
  return (
    <div className="flex flex-col items-center border-2 border-yellow-900 w-full ">
      <div className="text-3xl my-10">Todays Articles</div>
      <div className="border-2 border-rose-500 w-full text-center">
        Thinking a dropdown or something
        <div>Topic 1 - AI</div>
        <div>Topic 2 - Tech Jobs</div>
        <div>Topic 3 - ETC</div>
      </div>
    </div>
  );
};

export default ArticleSection;
