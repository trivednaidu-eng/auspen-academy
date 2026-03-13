import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "about", Component: AboutUs },
      { path: "faculty", element: <Navigate to="/about" replace /> },
      { path: "contact", Component: Contact },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);