import React from "react";
import ReactDOM from "react-dom/client";
import "@cloudscape-design/global-styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./config/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
