import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/layout";
import Page from "@/pages/Home";
import PlaygroundPage from "@/pages/Playground";
import SettingsPage from "@/pages/Settings";
import { getLocationFromIP } from "@/apis/getPrayTime";

import ErrorPage from "@/pages/ErrorPage";
import PastVerbPage from "@/pages/PastVerb";
import PronounsPage from "@/pages/Pronouns";
import PresentVerbs from "@/pages/PresentVerbs";
import Prular from "@/pages/Prular";

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
        element: <PronounsPage />,
        handle: { title: "Pronouns" },
      },
      {
        path : "present-verbs",
        element : <PresentVerbs />,
        handle: { title: "Present Verbs" },

      },
      {
        path: "past-verbs",
        element: <PastVerbPage />,
        handle: { title: "Past Verbs" },
      },
      {
        path: "settings",
        element: <SettingsPage />,
        handle: { title: "Settings" },
      },
       {
        path: "prular",
        element: <Prular />,
        handle: { title: "Prular" },
      },
    ],
  },
]);
