import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShaderBackground from "./ShaderBackground.tsx";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShaderBackground />
    <App />
    <Analytics />
  </React.StrictMode>
);
