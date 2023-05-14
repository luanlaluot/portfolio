import SidebarLayout from "layouts";
import AboutMe from "pages/AboutMe";
import NotFound from "pages/NotFound";
import ServerError from "pages/ServerError";
import Home from "pages/Home";
import Login from "pages/Login";
import Project from "pages/Project";
import Timeline from "pages/Timeline";
import { Navigate, useRoutes } from "react-router-dom";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/",
      element: <SidebarLayout />,
      children: [
        { element: <Navigate to="home" replace />, index: true },
        { path: "home", element: <Home /> },
        { path: "about-me", element: <AboutMe /> },
        { path: "timeline", element: <Timeline /> },
        { path: "project", element: <Project /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "500", element: <ServerError /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);

  return routes;
}
