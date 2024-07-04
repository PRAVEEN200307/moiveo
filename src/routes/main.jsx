import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import App from "../App";
import ExplorePage from "../pages/ExplorePage";
import Detailpage from "../pages/Detailpage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path:":explore",
         element: <ExplorePage/>
      },
      {
        path:":explore/:id",
        element: <Detailpage/>
      },
      {
        path:"search",
        element: <SearchPage />
      }
    ],
  },
]);

export default router;
