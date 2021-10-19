import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./routes";
import { RouteState } from "src/models";
import { ProtectedRoute } from "src/components";

function AppContent() {
  return (
    <Switch>
      {ROUTES.map((item: RouteState) => {
        const { Cmp, key, exact = false, path, isPrivate } = item;
        if (isPrivate) {
          return (
            <ProtectedRoute
              key={key}
              path={path}
              exact={exact}
              component={Cmp}
            />
          );
        }
        return (
          <Route key={key} path={path} exact={exact}>
            <Cmp />
          </Route>
        );
      })}
    </Switch>
  );
}

export default AppContent;
