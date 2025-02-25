import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Zamirler from "../pages/Zamirler";
import Prular from "../pages/Prular";
import SidebarLayout from "../layouts/SidebarLayout";
import Dashboard from "../pages/Dashboard";
import { getTimePray } from "../services/getTimePray";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader : getTimePray
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/zamirler",
        element: <Zamirler />,
      },
      {
        path: "/prular",
        element: <Prular />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
