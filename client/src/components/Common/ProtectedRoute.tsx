import { Redirect, Route } from "react-router";
import { useAppSelector } from "src/hook/redux";
import { ProtectedRouteProps } from "src/models";
import { selectIsAuthenticated } from "src/redux/slices/auth.slice";

export const ProtectedRoute = ({ ...routeProps }: ProtectedRouteProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
