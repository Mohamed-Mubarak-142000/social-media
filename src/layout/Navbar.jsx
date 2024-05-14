import React from "react";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] shadow-md">
      <nav className="h-full flex items-center gap-5 mx-5 md:mx-32 xl:mx-40">
        {/**logo */}
        <div className="font-bold text-lg  capitalize">
          <span className="text-blue ">Social</span> Media
        </div>

        {/**search box */}

        <div>
          <form action="">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search about..."
            />
          </form>
        </div>

        {/**others navbar */}
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
