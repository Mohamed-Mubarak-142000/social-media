import React from "react";

const LeftSidebar = () => {
  return (
    <div className="hidden lg:w-[300px] xl:flex xl:flex-col xl:gap-5 ">
      <div className=" h-[400px] bg-primary rounded-lg text-textColor p-2">
        LeftSidebar
      </div>
      <div className=" h-[400px] sticky top-16 bg-blue rounded-lg text-textColor p-2">
        LeftSidebar
      </div>
    </div>
  );
};

export default LeftSidebar;
