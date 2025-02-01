import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { API } from "./pages/API";
import { Landing } from "./pages/Landing";
import { EmbeddedGPN } from "./pages/EmbeddedGPN";
import { APILegacy } from "./pages/APILegacy";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/api/legacy",
    element: <APILegacy />,
  },
  {
    path: "/api/v1",
    element: <API />,
  },
  {
    path: "/embedded/gpn",
    element: <EmbeddedGPN />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
