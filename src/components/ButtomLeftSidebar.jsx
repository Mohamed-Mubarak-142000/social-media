import React from "react";
import { useSelector } from "react-redux";
import { campanies, groups } from "../assets/data";

const ButtomLeftSidebar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className=" mt-12">
      <h1 className="font-semibold capitalize text-center">
        {user?.firstName} {user?.lastName}
      </h1>
      <h1 className="text-blue capitalize text-center text-sm">{user?.bio}</h1>

      <div className="w-full h-0.5 bg-secondary my-2" />

      <div className="flex items-center justify-between px-2 my-3 capitalize text-sm text-textParag">
        <span>profile viewers</span>
        <span>{user?.views?.length}</span>
      </div>

      <div className="flex items-center justify-between px-2 my-3 capitalize text-sm text-textParag">
        <span> friends</span>
        <span>{user?.friends?.length}</span>
      </div>

      <div className="flex items-center justify-between px-2 my-3 capitalize text-sm text-textParag">
        <span> campanies</span>
        <span>{campanies?.length}</span>
      </div>

      <div className="flex items-center justify-between px-2 my-3 capitalize text-sm text-textParag">
        <span> groups</span>
        <span>{groups?.length}</span>
      </div>

      <div className="w-full h-0.5 bg-secondary my-2" />

      <div className="flex items-center justify-between px-2 capitalize text-sm text-textParag">
        <span>save items</span>
        <span>{user?.saveItems?.length}</span>
      </div>
    </div>
  );
};

export default ButtomLeftSidebar;
