import React from "react";
import { useContext } from "react";
import { LogIn } from "../screens/LogIn";
import { context } from "../context";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const user = useContext(context);
  return !!user.userData.name ? <AppRoutes /> : <LogIn />;
}
