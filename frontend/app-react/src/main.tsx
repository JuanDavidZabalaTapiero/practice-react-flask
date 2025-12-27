import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS Y JS (BOOTSTRAP)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// MAIN APP
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
