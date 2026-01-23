import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/dashboard" element={<App />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/error" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/testpage" element={<PageTest />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
