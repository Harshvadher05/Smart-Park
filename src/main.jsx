import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { RootRedirect } from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contect from "./pages/Contect.jsx";
import About from "./pages/About.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RootRedirect />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contect />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
