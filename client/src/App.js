import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import GameDetails from "./pages/GameDetails";

import AddVideoGameForm from "./pages/AddVideogameForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/videogames", element: <Homepage /> },
      { path: "/details/:gameId", element: <GameDetails /> },
      { path: "/addVideogameForm", element: <AddVideoGameForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

// comment for git testing

export default App;
