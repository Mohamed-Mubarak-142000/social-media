import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Erorr";
import Login from "../pages/Login";
const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
