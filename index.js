import React from "react";
import { createRoot } from "react-dom/client";

const heading=React.createElement("h1",{},"Hello word");
const root= createRoot(document.getElementById("root"));
root.render(heading);
