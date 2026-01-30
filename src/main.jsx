import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.module.scss";
import App from "./pages/App";
import Logements from "./pages/Logements";
import Error from "./pages/404";
import About from "./pages/About";
import PageTest from "./pages/PageTest";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/about" element={<About />} />
        <Route path="/testpage" element={<PageTest />} />
        {/* Wildcard route: Catch all for everything else. MUST be the last route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
