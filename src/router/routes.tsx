import { ReactLocation, Route } from "@tanstack/react-location";
// import { Index } from "~/pages/Index";
import { About } from "~/pages/About";
// import { FormSample } from "~/pages/FormSample";

export const location = new ReactLocation();

type CustomRoute = {
  name: string;
} & Route;

export const routes: CustomRoute[] = [
  { path: "/", element: () => import("~/pages/Home").then((page) => <page.Home />), name: "home" },
  { path: "about", element: <About />, name: "About" },
  {
    path: "form",
    element: () => import("~/pages/FormSample").then((page) => <page.FormSample />),
    name: "Formサンプル"
  }
  // { path: "form", element: <FormSample /> }
  // { path: "/posts", element: <Posts /> }
];
