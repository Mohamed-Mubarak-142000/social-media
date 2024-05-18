import { BiPlus } from "react-icons/bi";
import imageProfile from "../assets/profile.png";
const OneRequest = ({ person }) => {
  return (
    <div className="my-3 p-1 flex items-center text-textColor justify-between">
      <div className=" flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full border border-secondary">
          <img
            src={person?.requestFrom?.profileUrl ?? imageProfile}
            alt="image person"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="text-sm flex flex-col">
          <span className="flex gap-1 font-semibold">
            <span>{person?.requestFrom?.firstName}</span>
            <span>{person?.requestFrom?.lastName}</span>
          </span>

          <span className="text-xs text-textParag">
            {person?.requestFrom?.email}
          </span>

          <span className="text-xs text-textParag">
            {person?.requestFrom?.profession}
          </span>
        </div>
      </div>

      <button className="border border-blue flex items-center rounded-xl px-2 capitalize hover:border-textParag hover:text-blue  ">
        <BiPlus />
        <span>confirm</span>
      </button>
    </div>
  );
};

export default OneRequest;
