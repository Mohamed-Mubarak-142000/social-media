import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Erorr";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import UserDetails from "../pages/UserDetails";
import SearchPosts from "../pages/SearchPosts";
import Videos from "../pages/Videos";
import ForgetPassword from "../pages/ForgetPassword";
const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/user-details/:id?",
          element: <UserDetails />,
        },
        {
          path: "/search-post/:id",
          element: <SearchPosts />,
        },
        {
          path: "/all-vedios",
          element: <Videos />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
