import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default router;
