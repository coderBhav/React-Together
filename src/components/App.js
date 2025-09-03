import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Shop from "./Shop";
import New from "./New";
import BestSeller from "./BestSeller";
import About from "./About";
import Contact from "./Contact";
import { createBrowserRouter,Outlet } from "react-router-dom";
import About from "./About";
import Issues from "./Issues";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export const rout=createBrowserRouter(
  [
    {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/home",
        element:<Body/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/new",
        element:<New/>
      },
      {
        path:"/bestseller",
        element:<BestSeller/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ],
    errorElement:<Issues/>
  },
  ])

export default App;