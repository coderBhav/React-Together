import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider } from "react-router-dom";
import { rout } from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rout} />);