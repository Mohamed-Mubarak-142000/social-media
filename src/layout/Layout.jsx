import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  const loacte = useLocation();

  return (
    <div className="flex flex-col gap-5">
      {loacte.pathname === "/login" ? null : <Navbar />}

      <section className="flex justify-center gap-5 h-[100vh] border mx-5 md:mx-32 xl:mx-40">
        {loacte.pathname === "/login" ? null : <LeftSidebar />}
        <div className="border w-full sm:w-[450px] md:w-[550px] xl:w-[650px]">
          {children}
          <Outlet />
        </div>
        {loacte.pathname === "/login" ? null : <RightSidebar />}
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
