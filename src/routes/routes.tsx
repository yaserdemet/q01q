import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/layout";
import Page from "@/pages/page1";
import PlaygroundPage from "@/pages/playground";
import HistoryPage from "@/pages/Pronouns";
import StarredPage from "@/pages/starred";
import SettingsPage from "@/pages/Settings";
import { getLocationFromIP } from "@/apis/getPrayTime";

import ErrorPage from "@/pages/ErrorPage";
import StartedPage from "@/pages/starred";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: getLocationFromIP,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Page />,
        handle: { title: "Home" },
      },
      {
        path: "playground",
        element: <PlaygroundPage />,
        handle: { title: "Playground" },
      },
      {
        path: "pronouns",
        element: <HistoryPage />,
        handle: { title: "History" },
      },
      {
        path: "started",
        element: <StartedPage />,
        handle: { title: "Started" },
      },
      {
        path: "settings",
        element: <SettingsPage />,
        handle: { title: "Settings" },
      },
    ],
  },
]);
