import { createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "@/layouts";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
