import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import PlaygroundPage from "./pages/playground"
import HistoryPage from "./pages/history"
import StarredPage from "./pages/starred"
import SettingsPage from "./pages/settings"
import Page from "./pages/page1"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout pageTitle="Home">
              <Page />
            </Layout>
          }
        />
        <Route
          path="/playground"
          element={
            <Layout pageTitle="Playground">
              <PlaygroundPage />
            </Layout>
          }
        />
        <Route
          path="/history"
          element={
            <Layout pageTitle="History">
              <HistoryPage />
            </Layout>
          }
        />
        <Route
          path="/starred"
          element={
            <Layout pageTitle="Starred">
              <StarredPage />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout pageTitle="Settings">
              <SettingsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
