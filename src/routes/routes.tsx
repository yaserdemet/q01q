import { ReactNode } from "react"
import Layout from "@/components/layout"
import Page from "@/pages/page1"
import PlaygroundPage from "@/pages/playground"
import HistoryPage from "@/pages/history"
import StarredPage from "@/pages/starred"
import SettingsPage from "@/pages/settings"

export interface AppRoute {
  path: string
  label: string
  element: ReactNode
}

export const routes: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    element: (
      <Layout pageTitle="Home">
        <Page />
      </Layout>
    ),
  },
  {
    path: "/playground",
    label: "Playground",
    element: (
      <Layout pageTitle="Playground">
        <PlaygroundPage />
      </Layout>
    ),
  },
  {
    path: "/history",
    label: "History",
    element: (
      <Layout pageTitle="History">
        <HistoryPage />
      </Layout>
    ),
  },
  {
    path: "/starred",
    label: "Starred",
    element: (
      <Layout pageTitle="Starred">
        <StarredPage />
      </Layout>
    ),
  },
  {
    path: "/settings",
    label: "Settings",
    element: (
      <Layout pageTitle="Settings">
        <SettingsPage />
      </Layout>
    ),
  },
]
