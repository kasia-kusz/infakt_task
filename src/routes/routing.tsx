import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Accountants from "../app/accountants/accountants";
import Homepage from "../app/homepage/homepage";
import ErrorPage from "../app/error/error-page";

export function Routing() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ksiegowi",
        element: <Accountants />,
      },
    ],
    {
      basename: "/infakt_task",
    }
  );

  return <RouterProvider router={router} />;
}
