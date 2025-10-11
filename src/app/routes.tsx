import type { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";

const convert = (m: {
  default: ComponentType;
}): { Component: ComponentType } => {
  return { Component: m.default };
};

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: () => import("../pages/main").then(convert),
    },
    {
      path: "*",
      lazy: () => import("../pages/not-found").then(convert),
    },
  ]);
