import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.module.scss";
import App from "./pages/App";
import Error from "./pages/404";
import About from "./pages/About";
import Pages from "./pages/Pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic route that accepts the 'id' parameter */}
        <Route path="/pages/:id" element={<Pages />} />
        {/* Wildcard route: Catch all for everything else. MUST be the last route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
