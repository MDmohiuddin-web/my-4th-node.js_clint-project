import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Root from "./Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error/Error";
import Home from "./Home/Home";
import UpdateCoffee from "./Cooffee/UpdateCoffee";
import AddCoffee from "./Cooffee/AddCoffee";

import Card from "./Cooffee/Card";
import Login from "./Users/Login";
import Sinup from "./Users/Sinup";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./Users/Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:1001/coffee"),
      },
      {
        path: "/card",
        element: <Card></Card>,
      },

      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:1001/coffee/${params.id}`),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },{
        path:'/signup',
        element:<Sinup></Sinup>
      },
      {
        path:'/Users',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:1001/users')
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
     
   
  </React.StrictMode>
);
