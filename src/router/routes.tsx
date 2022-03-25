import { Route, ReactLocation } from "@tanstack/react-location";
import Index from "~/pages/Index";
import About from "~/pages/About";

export const location = new ReactLocation();

export const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "about", element: <About /> }
  // { path: "/posts", element: <Posts /> }
];
