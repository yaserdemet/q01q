import { Profiler, StrictMode } from "react"
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
    <Profiler id="app" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
      console.log("id", id);
      console.log("phase", phase);
      console.log("actualDuration", actualDuration);
      console.log("baseDuration", baseDuration);
      console.log("startTime", startTime);
      console.log("commitTime", commitTime);
    }}>
    <App />
    </Profiler>
  </StrictMode>
)
