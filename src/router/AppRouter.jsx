import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Zamirler from "../pages/Zamirler";
import Prular from "../pages/Prular";
const router = createBrowserRouter([
  {
    path: "/zamirler",
    element: <Zamirler />,
  },
  {
    path: "/prular",
    element: <Prular />,
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
