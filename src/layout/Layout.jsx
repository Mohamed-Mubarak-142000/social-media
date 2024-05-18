import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const loacte = useLocation();

  return (
    <div className="flex flex-col gap-5">
      {loacte.pathname === "/login" ||
      loacte.pathname === "/register" ||
      loacte.pathname === "/forget-password" ? null : (
        <Navbar />
      )}

      <section className="flex justify-center relative gap-5 mt-16 min-h-[90vh] mx-5 md:mx-32 xl:mx-48">
        {/***left */}
        {loacte.pathname === "/login" ||
        loacte.pathname === "/register" ||
        loacte.pathname === "/forget-password" ? null : (
          <LeftSidebar />
        )}

        {/***center */}

        <div
          className={` ${
            loacte.pathname === "/login" ||
            loacte.pathname === "/register" ||
            loacte.pathname === "/forget-password"
              ? "w-full"
              : " w-full sm:w-[450px] md:w-[550px] xl:w-[600px]"
          }`}
        >
          {children}
          <Outlet />
        </div>

        {/***right */}

        {loacte.pathname === "/login" ||
        loacte.pathname === "/register" ||
        loacte.pathname === "/forget-password" ||
        loacte.pathname === "/all-request" ? null : (
          <RightSidebar />
        )}
      </section>

      {loacte.pathname === "/login" ||
      loacte.pathname === "/register" ||
      loacte.pathname === "/forget-password" ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
