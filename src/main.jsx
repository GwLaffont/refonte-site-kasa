import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
