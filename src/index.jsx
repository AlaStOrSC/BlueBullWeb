import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BlueBullHomePage } from "./screens/BlueBullHomePage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BlueBullHomePage />
  </StrictMode>,
);
