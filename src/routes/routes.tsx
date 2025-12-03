import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout";
import Page from "@/pages/page1";
import PlaygroundPage from "@/pages/playground";
import HistoryPage from "@/pages/history";
import StarredPage from "@/pages/starred";
import SettingsPage from "@/pages/settings";
import { getLocationFromIP, getPrayTime } from "@/apis/getPrayTime";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout pageTitle="Home">
        <Page />
      </Layout>
    ),
    loader: getLocationFromIP,
  },
  {
    path: "/playground",
    element: (
      <Layout pageTitle="Playground">
        <PlaygroundPage />
      </Layout>
    ),
    loader: getLocationFromIP,
  },
  {
    path: "/history",
    element: (
      <Layout pageTitle="History">
        <HistoryPage />
      </Layout>
    ),
    loader: getLocationFromIP,
  },
  {
    path: "/starred",
    element: (
      <Layout pageTitle="Starred">
        <StarredPage />
      </Layout>
    ),
    loader: getLocationFromIP,
  },
  {
    path: "/settings",
    element: (
      <Layout pageTitle="Settings">
        <SettingsPage />
      </Layout>
    ),
    loader: getLocationFromIP,
  },
]);
