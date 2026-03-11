import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import * as Sentry from "@sentry/react";
import "./index.css"
import App from "./App.tsx"
Sentry.init({
  tracesSampleRate: 1.0,
  dsn: import.meta.env.VITE_SENTRY_DNS,
   integrations: [Sentry.browserTracingIntegration()],
   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
