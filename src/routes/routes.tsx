import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/layout";
import Page from "@/pages/Home";
import PlaygroundPage from "@/pages/Playground";
import SettingsPage from "@/pages/Settings";
import { getLocationFromIP } from "@/apis/getPrayTime";

import ErrorPage from "@/pages/ErrorPage";
import PastVerbPage from "@/pages/verbs/PastVerb";
import PronounsPage from "@/pages/essential/Pronouns";
import PresentVerbs from "@/pages/verbs/PresentVerbs";
import Prular from "@/pages/essential/Prular";
import Babs from "@/pages/verbs/Babs";
import Graphics from "@/pages/interactive/Graphics";
import MapPage from "@/pages/interactive/Map";
import VerbTypes from "@/pages/verbs/VerbTypes";
import Contact from "@/pages/contact/Contact";
import SocialComments from "@/pages/contact/SocialComments";
import Roles from "@/pages/essential/Roles";

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
        path: "sentences-types",
        element: <Roles />,
        handle: { title: "Sentences Types" },
      },
      {
        path: "verbs",
        children: [
          {
            index: true,
            path: "present-verbs",
            element: <PresentVerbs />,
            handle: { title: "Present Verbs" },
          },
          {
            path: "past-verbs",
            element: <PastVerbPage />,
            handle: { title: "Past Verbs" },
          },
          {
            path: "types",
            element: <VerbTypes />,
            handle: { title: "Types" },
          },
        ],
      },
      {
        path: "babs",
        element: <Babs />,
        handle: { title: "Babs" },
      },
        {
        path: "contact",
        element: <Contact />,
        handle: { title: "Contact" },
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
      {
        path: "/interactive",
        children: [
          {
            path: "graphics",
            element: <Graphics />,
            handle: { title: "Graphics" },
          },
          {
            path: "map",
            element: <MapPage />,
            handle: { title: "Map" },
          },
        ],
      },
        {
        path: "social",
        children: [
          {
            path: "contact",
            element: <Contact />,
            handle: { title: "Contact" },
          },
            {
            path: "comments",
            element: <SocialComments />,
            handle: { title: "Comments" },
          },
        ],
      },
    ],
  },
]);
