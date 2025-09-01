import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from './App';
import './i18n'; // Inicializar i18n

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
