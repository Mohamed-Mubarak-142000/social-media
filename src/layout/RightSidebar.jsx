import { FaUserGroup } from "react-icons/fa6";
import { campanies, groups, requests } from "../assets/data";
import OneRequest from "../components/OneRequest";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import { BiSolidHomeCircle } from "react-icons/bi";
import { TbUserShare } from "react-icons/tb";

const RightSidebar = () => {
  return (
    <div className="hidden md:block md:w-[300px] mt-5 lg:w-[300px] h-[700px] ">
      {/****top sidebar right ****/}
      <div className="bg-primary rounded-lg text-white p-2">
        <div className="flex items-center text-textColor justify-between w-full">
          <span>Add to your feed</span>
          <span>
            <FaUserGroup />
          </span>
        </div>

        {requests?.map((person) => {
          return <OneRequest person={person} key={person._id} />;
        })}

        <Link
          to={"/all-request"}
          className="flex items-center animate-bounce text-blue font-bold capitalize text-sm "
        >
          <span>all requests</span>
          <BsArrowBarRight size={20} />
        </Link>
      </div>

      {/***bottom sidebar rigth */}
      {/***campanies */}
      <div className="bg-primary rounded-lg text-white my-3 p-2">
        <div className="my-3 text-textColor font-bold text-sm flex flex-col gap-3">
          <div className="flex font-normal capitalize items-center text-textColor text-sm justify-between w-full">
            <span>followed companies and groups</span>
            <span>
              <BiSolidHomeCircle />
            </span>
          </div>
          {campanies?.map((campany) => {
            return (
              <div>
                <span>#</span>
                <span>{campany?.name}</span>
              </div>
            );
          })}
        </div>
        {/***groups */}
        <div className="my-3 text-textColor font-bold text-sm flex flex-col gap-3">
          <div className="flex items-center text-textColor font-normal capitalize text-sm justify-between w-full">
            <span>followed companies and groups</span>
            <span>
              <TbUserShare />
            </span>
          </div>
          {groups?.map((group) => {
            return (
              <div>
                <span>#</span>
                <span>{group?.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-wrap items-center justify-center text-sm p-2 text-textParag gap-2">
        <span>home | </span>
        <span>about | </span>
        <span>accessability | </span>
        <span>privacy & team | </span>
        <span>ad choices | </span>
        <span>Advertising | </span>
        <span>get linkedin app </span>
      </div>
    </div>
  );
};

export default RightSidebar;
