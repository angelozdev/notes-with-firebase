import { Route, RouteProps, Redirect } from "react-router-dom";

import { Routes } from "src/consts";
import { useAuth } from "src/hooks";

export function PrivateRoute(props: RouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to={Routes.LOGIN} />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
