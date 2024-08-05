import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { API } from "./pages/API";
import { Landing } from "./pages/Landing";
import { EmbeddedGPN } from "./pages/EmbeddedGPN";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/api",
      element: <API />,
    },
    {
      path: "/embedded/gpn",
      element: <EmbeddedGPN />,
    },
  ],
  {
    basename: "/developer.lunchpayments.com/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
