import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../app/homepage/homepage";
import Accountants from "../app/accountants/accountants";

export function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/ksiegowi",
      element: <Accountants />,
    },
  ]);

  return <RouterProvider router={router} />;
}
