import React from "react";
import { useContext } from "react";
import { LogIn } from "../screens/LogIn";
import { userContext } from "../context";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const user = useContext(userContext);
  return !!user.userData.name ? <AppRoutes /> : <LogIn />;
}
