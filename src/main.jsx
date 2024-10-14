import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthentificationProvider } from "./AuthentificationProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <BrowserRouter>
    <AuthentificationProvider>
      <App />
    </AuthentificationProvider>
        </BrowserRouter>
  </StrictMode>
);
