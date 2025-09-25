import React from "react";

import "./App.css";
import ShowPage from "./component/ShowPage.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./component/HomePage.js";
import Header from "./component/Header.jsx";
import NavBar from "./component/NavBar.jsx";
import BigBrother from "./component/BigBrother.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/showpage",
    element: <ShowPage />,
  },
  {
    path: "/bigbrother",
    element: <BigBrother />,
  },
]);

function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    // Fetch API data
    axios
      .get("https://api.tvmaze.com/shows/1")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <NavBar />
      <RouterProvider router={router} />,
    </div>
  );
}

export default App;
