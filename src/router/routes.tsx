import { ReactLocation, Route } from "@tanstack/react-location";
// import { Index } from "~/pages/Index";
import { About } from "~/pages/About";
// import { FormSample } from "~/pages/FormSample";

export const location = new ReactLocation();

export const routes: Route[] = [
  { path: "/", element: () => import("~/pages/Home").then((page) => <page.Home />) },
  { path: "about", element: <About /> },
  { path: "form", element: () => import("~/pages/FormSample").then((page) => <page.FormSample />) }
  // { path: "form", element: <FormSample /> }
  // { path: "/posts", element: <Posts /> }
];
